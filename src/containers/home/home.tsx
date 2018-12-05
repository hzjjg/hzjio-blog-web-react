import * as React from 'react';
import './home.scss';
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from 'src/models/article.entity';
import { HomeArticleItem } from './article_item/article_item';
import { ArticleApi } from 'src/apis/article.api';
import articleStore from 'src/store/article';
import articleActions from "src/store/article/article.action";

class Home extends React.Component<any, HomeState> {

  constructor(props: any) {
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
              this.state.recentArticles.map((article, index) =>
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
    this.showRecentArticle();
    articleStore.dispatch(articleActions.loadList());

    // TODO 
    console.log(articleStore.getState());

    articleStore.subscribe(() => {
      console.log('hahah');
    });

    setTimeout(() => {
      articleStore.dispatch(articleActions.loadList());
    }, 2000);

  }

  showRecentArticle() {
    // TODO 从store 中取数据
    ArticleApi.getList().then(articles => {
      this.setState({
        recentArticles: articles
      });
      console.log(this.state.recentArticles);

    }).catch(error => {
      console.log(error);
    });
  }

}

interface HomeState {
  recentArticles: ArticleEntity[];
}

export default Home;