import React, { Suspense } from "react";
import { connect } from "react-redux";
import routes from "./routes/routes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import './scss/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import { LayoutHome } from "./layouts/layout-home/LayoutHome";
import { MainLayout } from "./layouts/main-layout/MainLayout";

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
