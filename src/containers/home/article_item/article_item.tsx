import * as React from "react";
import { Link } from "react-router-dom";
import './article_item.scss';

export class HomeArticleItem extends React.Component<HomeArticleItemProps> {

    constructor(props: HomeArticleItemProps) {
        super(props);
    }

    public render() {
        return (
            <Link to={`article/${this.props.id}`} href="javascript:;" className="homeArticle">
                <div className="homeArticle-title">{this.props.title}</div>
                <div className="homeArticle-summary">{this.props.summary}</div>
            </Link>
        );
    }

}

interface HomeArticleItemProps {
    title: string;
    summary: string;
    id: string;
}
