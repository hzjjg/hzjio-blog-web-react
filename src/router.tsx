import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/home/home';
import ArticleList from './containers/article_list/article_list';
import Article from './containers/article/article';
import About from './containers/about/about';
import { Provider } from 'react-redux';
import store from './store';
import asyncComponent from './utils/async_component';

const Editor = asyncComponent(()=> import('./containers/editor/editor'));

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/home" component={Home} />
                    <Route exact={true} path="/index" component={Home} />

                    <Route exact={true} path="/articles" component={ArticleList} />
                    <Route exact={true} path="/article/:id" component={Article} />

                    <Route exact={true} path="/editor/:id" component={Editor} />

                    <Route exact={true} path="/about" component={About} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default AppRouter;