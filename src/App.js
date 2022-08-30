import React, { Suspense, useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ModalLoader } from "./components/core";
import { routes } from "./routes";
import { Layout } from "./layout/Layout";

function App() {
  const [logged, setLogged] = useState(null);

  const getRoutes = (route, key) => {
    let Component = route?.component;
    console.log("Component:", Component);

    return (
      <Route
        key={key}
        path={route?.path}
        element={
          <Layout handleLoginValue={(data) => setLogged(data)} isActive={route}>
            <Component handleLoginValue={(data) => setLogged(data)} />
          </Layout>
        }
      />
    );
  };
  console.log("getRoutes", getRoutes);

  return (
    <div className="bg-highlight1">
      <div className="container-xxxl">
        <Suspense
          fallback={
            <div>
              <ModalLoader open={true} content={"loading..."} />
            </div>
          }
        >
          <Router>
            <Routes>
              <Route
                path="/menuIcons"
                element={<Navigate replace to="/menuIcons" />}
              />
              {routes.map((route, key) => {
                // admin flow
                return (
                  <React.Fragment key={`route_${key}`}>
                    {getRoutes(route, key)}
                    <Route
                      key={key}
                      path="*"
                      element={<Navigate replace to="/home" />}
                    />
                  </React.Fragment>
                );
              })}
            </Routes>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
