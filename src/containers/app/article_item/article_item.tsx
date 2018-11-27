import * as React from "react";
import './article_item.scss';

export class HomeArticleItem extends React.Component<HomeArticleItemProps> {

    constructor(props: HomeArticleItemProps) {
        super(props);
    }

    public render() {
        return (
            <a href="javascript:;" className="homeArticle">
                <div className="homeArticle-title">{this.props.title}</div>
                <div className="homeArticle-summary">{this.props.summary}</div>
            </a>
        );
    }

}

interface HomeArticleItemProps {
    title: string;
    summary: string;
}
