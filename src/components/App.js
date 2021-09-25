import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Quiz" component={Quiz} />
              <Route exact path="/Result" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
