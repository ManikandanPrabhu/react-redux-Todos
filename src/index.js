import ReactDom from "react-dom";
import { store } from "./todos/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
