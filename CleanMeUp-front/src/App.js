import React, { Suspense } from "react";
import { connect } from "react-redux";
import routes from "./routes/routes";
import { HashRouter as BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import './scss/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import { LayoutHome } from "./layouts/layout-home/LayoutHome";
import { MainLayout } from "./layouts/main-layout/MainLayout";
import { AccountLayout } from "./layouts/account-layout/AccountLayout";
import { isLoggedIn } from "./helpers/authHelper";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";

function App() {
  const history = createBrowserHistory();

  const loading = () => <div>Loading...</div>;

  const routing = () => {
    return (
      <Suspense fallback={loading()} history={history}>
        <BrowserRouter history={history}>
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
