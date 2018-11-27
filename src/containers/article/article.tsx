import * as React from "react";
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';

class Article extends React.Component {
    public render() {
        return (
            <div className="Article">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Article;