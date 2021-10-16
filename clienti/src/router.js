import { BrowserRouter, Switch, Route } from "react-router-dom";
import { App, ContactList } from "./components";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />

      <Route exact path="/contact" component={ContactList} />
    </Switch>
  </BrowserRouter>
);
