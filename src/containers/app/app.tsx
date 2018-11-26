import * as React from 'react';
import './app.scss';
import Header from 'src/componets/header/header'
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from 'src/models/article.entity';
import { HomeArticleItem } from './article_item/article_item';
import { ArticleApi } from 'src/apis/article.api';

class App extends React.Component {

  recentArticles: ArticleEntity[] = [];

  public render() {
    return (
      <div className="app">

        <Header />

        <div className="app-content">
          <div className="app-articles">
            {
              this.recentArticles.map(article => {
                <HomeArticleItem title={article.title} summary={article.summary} />
              })
            }
          </div>
        </div>

        <Footer />

      </div>

    );
  }

  async componentDidMount() {
    console.log('hahahah');
    
    ArticleApi.getList().then(articles => {
      this.recentArticles = articles;
    }).catch(error => {
      console.log(error);
    })
  }

}

export default App