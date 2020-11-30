import React, { Suspense } from "react";
import { connect } from "react-redux";
import "./style/style.scss";
import routes from "./routes/routes";
// import "bootstrap/dist/css/bootstrap.min.css"
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  const loading = () => <div>Loading...</div>;

  const routing = () => {
    return (
      <Suspense fallback={loading()} history={history}>
        <Router history={history}>
          <Switch>
            {routes.map((route, id) => {
              return route.component ? (
                <Route
                  key={id}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect to="/" />
          </Switch>
        </Router>
      </Suspense>
    );
  };

  return (
    <div className="App">
      {routing()}
      {/* <Order /> */}
    </div>
  );
}

export default connect()(App);
