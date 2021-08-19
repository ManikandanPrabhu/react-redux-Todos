import { React } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import Todo from "./Todo";

const TodosList = ({ todos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} idx={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodosList);
