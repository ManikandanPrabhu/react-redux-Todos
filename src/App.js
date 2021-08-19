import "./styles.css";
import React, { Component } from "react";
import { store } from "./todos/store";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import InputField from "./components/InputField";
import TodosList from "./components/TodosList";

import { deleteAll } from "./todos/action/addTodo.action";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <InputField />
          <TodosList />
        </div>
        <div className="deleteAll">
          <button onClick={() => deleteAll()} style={{ color: "red" }}>
            Delete All
          </button>
        </div>
      </Provider>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   deleteAll: () => dispatch(deleteAll)
// });

// export default connect(null, mapDispatchToProps)(App);
