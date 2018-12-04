import * as React from "react";
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';

class ArticleList extends React.Component {
    public render() {
        return (
            <div className="ArticleList">
                <Header/>
                article list
                <Footer/>
            </div>
        );
    }
}

export default ArticleList;