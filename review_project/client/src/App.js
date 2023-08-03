import { Home, Landing, Detail, Form } from "./views";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/Detail" component={Detail} />
      <Route exact path="/create" component={Form} />
      <Route path="/Home" render={() => <Home />} />
    </div>
  );
}

export default App;
