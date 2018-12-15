import * as React from "react";
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from "src/models/article.entity";
import { RootState } from "src/store";
import { articleActions } from "src/store/article";
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router";
import { Dispatch } from "redux";
import Vote from "./vote";

class Article extends React.Component<ArticleProps> {

    public render() {
        let articleContent = '';
        let vote = null;

        if (this.props.article) {
            articleContent = this.props.article.content;
            vote = <Vote articleId={this.props.article.id} count={this.props.article.votes} />;
        }

        return (
            <div className="Article">
                <Header />
                <div>
                    {articleContent}
                    {vote}
                </div>
                <Footer />
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchArticle();
    }
}

interface ArticleProps {
    article: ArticleEntity;
    fetchArticle(): void;
}

const mapStateToProps = (state: RootState) => {
    return {
        article: state.article.currentArticle
    };
};


const mapDispatchToProps = (dispatch: Dispatch, props: RouteComponentProps) => {
    const action = () => articleActions.fetchOne.request({ id: (props.match.params as any).id });

    return {
        fetchArticle: () => { dispatch(action()); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);