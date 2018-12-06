import * as React from 'react';
import './home.scss';
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from 'src/models/article.entity';
import { HomeArticleItem } from './article_item/article_item';
import { RootState } from 'src/store';
import { articleActions, articleSelector } from 'src/store/article';
import { connect } from 'react-redux';

class Home extends React.Component<HomeProps> {

  constructor(props: HomeProps) {
    super(props);
    this.state = {
      recentArticles: []
    };
  }

  public render() {
    return (
      <div className="home">

        <Header />

        <div className="home-content">
          <div className="home-articles">
            {
              this.props.recentArticles.map((article, index) =>
                <HomeArticleItem
                  key={index}
                  title={article.title}
                  summary={article.summary}
                  id={article.id}
                />
              )
            }
          </div>
        </div>

        <Footer />

      </div>

    );
  }

  async componentDidMount() {
    this.props.getRecentArticles();
  }

}

interface HomeProps {
  recentArticles: ArticleEntity[];
  getRecentArticles(): any;
}

/** 绑定 state 到 props */
const mapStateToProps = (state: RootState) => {
  return {
    recentArticles: articleSelector.getArticleList(state.article)
  };
};

/** 绑定 dispatch 到props */
const mapDispatchToProps = {
  getRecentArticles: () => articleActions.fetchList.request({})
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);