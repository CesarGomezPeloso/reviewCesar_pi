import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar/NabBar";
import { Home, Landing, Detail, Form } from "./views";

import { Route } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/Home" render={() => <Home />} />
      <Route exact path="/Detail" component={Detail} />
      <Route exact path="/create" component={Form} />
    </div>
  );
}

export default App;
