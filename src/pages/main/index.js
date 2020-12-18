import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routers } from '_const/index';
import Login from '_pages/login/index';
import Nav from './components/nav';
import store from '_store/index';
import '_less/main/index.less';

const Main = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="page">
                    <Switch>
                        {routers.map((item) => {
                            return (
                                <Route
                                    key={item.path}
                                    exact={item.exact}
                                    path={item.path}
                                    render={(props) => (
                                        <item.component {...props} store={store} routers={item.child} />
                                    )}
                                />
                            );
                        })}
                    </Switch>
                </div>
                <Nav />

                <Route path="/login" component={Login} />
            </Router>
        </Provider>
    );
};

export default Main;
