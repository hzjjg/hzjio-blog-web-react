import * as React from 'react';

class Vote extends React.Component<VoteProps>{

    public render() {
        return (
            <div className="voteCount" onClick={this.clickHandle}>{this.props.count}</div>
        );
    }

    clickHandle = () => {
        console.log('hahha');
        console.log(this);
    }
}

interface VoteProps {
    articleId: string;
    count: number;
}

export default Vote;