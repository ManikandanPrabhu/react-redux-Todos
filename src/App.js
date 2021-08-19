import "./styles.css";
import React, { Component } from "react";

import { connect } from "react-redux";

import InputField from "./components/InputField";
import TodosList from "./components/TodosList";

import { deleteAll } from "./todos/action/addTodo.action";

class App extends Component {
  render() {
    const { deleteAll } = this.props;
    return (
      <>
        <div className="App">
          <InputField />
          <TodosList />
        </div>
        <div className="deleteAll">
          <button onClick={deleteAll} style={{ color: "red" }}>
            Delete All
          </button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(deleteAll())
});

export default connect(null, mapDispatchToProps)(App);
