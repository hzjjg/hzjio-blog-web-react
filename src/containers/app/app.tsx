import * as React from 'react';
import './app.scss';
import Header from 'src/componets/header/header'
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from 'src/models/article.entity';
import { HomeArticleItem } from './article_item/article_item';
import { ArticleApi } from 'src/apis/article.api';

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      recentArticles: []
    }
  }

  public render() {
    return (
      <div className="app">

        <Header />

        <div className="app-content">
          <div className="app-articles">
            {
              this.state.recentArticles.map((article,index) => 
                <HomeArticleItem key={index} title={article.title} summary={article.summary} />
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
  }

  showRecentArticle() {
    ArticleApi.getList().then(articles => {
      this.setState({
        recentArticles: articles
      })
      console.log(this.state.recentArticles);

    }).catch(error => {
      console.log(error);
    })
  }

}

interface AppState {
  recentArticles: ArticleEntity[]
}

export default App