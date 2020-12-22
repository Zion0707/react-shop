import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routers } from '_const/index';
import Login from '_pages/login/index';
import store from '_store/index';
import '_less/main/index.less';

const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>{renderRoutes(routers)}</Switch>

                <Route path="/login" component={Login} />
            </Router>
        </Provider>
    );
};

export default Main;
