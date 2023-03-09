import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import { routes } from "./routes";
import './fontAwesome'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          {routes.map((route, index) => {
            
            const Page = route.component;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout background={route.background}>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
