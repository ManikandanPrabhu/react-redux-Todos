import { React } from "react";

import { connect } from "react-redux";
import { deleteTodo } from "../todos/action/addTodo.action";
import { editTodo } from "../todos/action/addTodo.action";

const Todo = ({ todo, idx, deleteTodo, editTodo, text, selected }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        border: "1px solid #ffffffa6",
        padding: "10px"
      }}
    >
      <div onClick={() => editTodo(idx)}>{selected === idx ? text : todo} </div>
      <div style={{ cursor: "pointer" }} onClick={() => deleteTodo(idx)}>
        X
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (key) => dispatch(deleteTodo(key)),
  editTodo: (key) => dispatch(editTodo(key))
});

const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
