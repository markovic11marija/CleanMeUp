import 'font-awesome/css/font-awesome.min.css';
import { createBrowserHistory } from "history";
import React, { Fragment, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { HashRouter as BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import './scss/bootstrap.css';
import './App.scss';
import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import { isLoggedIn } from "./helpers/authHelper";
import { AccountLayout } from "./layouts/account-layout/AccountLayout";
import { LayoutHome } from "./layouts/layout-home/LayoutHome";
import { MainLayout } from "./layouts/main-layout/MainLayout";

function ScrollToTop() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

function App() {
  const history = createBrowserHistory();

  const loading = () => <div>Loading...</div>;

  const routing = () => {
    return (
      <Suspense fallback={loading()} history={history}>
        <BrowserRouter history={history}>
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact={true} component={LayoutHome} />
            <Route path="/page" component={MainLayout}/>
            {isLoggedIn() && (<Route path="/account" component={AccountLayout}/>)}
            <Route path="*">
              <MainLayout>

              <PageNotFound />
              </MainLayout>
            </Route>
          </Switch>
        </Fragment>
        </BrowserRouter>
      </Suspense>
    );
  };

  return (
    <div className="App">
      {routing()}
    </div>
  );
}

export default connect()(App);
