import  * as React from "react";

export class HomeArticleItem extends React.Component<HomeArticleItemProps> {

    constructor(props:HomeArticleItemProps){
        super(props);

        console.log(this.props);

    }

    public render(){
        return(
            <div className="homeArticle">
                <div className="homeArticle-title">{this.props.title}</div>
                <div className="homeArticle-summary">{this.props.summary}</div>
            </div>
        );
    }

}

interface HomeArticleItemProps {
    title:string;
    summary:string;
}
