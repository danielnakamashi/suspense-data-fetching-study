import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FetchDataProvider } from "./FetchDataContext";
import Home from "./Home";
import Data from "./Data";

import "./App.css";

function App() {
  return (
    <Router>
      <FetchDataProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback="Loading...">
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/pokemon/:name"
            element={
              <Suspense fallback="Loading pokemon...">
                <Data />
              </Suspense>
            }
          />
        </Routes>
      </FetchDataProvider>
    </Router>
  );
}

export default App;
