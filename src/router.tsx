import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/home/home';
import ArticleList from './containers/article_list/article_list';
import Article from './containers/article/article';
import About from './containers/about/about';
import { Editor } from './containers/editor/editor';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/home" component={Home} />
                <Route exact={true} path="/index" component={Home} />

                <Route exact={true} path="/articles" component={ArticleList} />
                <Route exact={true} path="/articles/:id" component={Article} />
                
                <Route exact={true} path="/editor/:id" component={Editor} />
                
                <Route exact={true} path="/about" component={About} />
            </Switch>

        </Router>
    );
};

export default AppRouter;