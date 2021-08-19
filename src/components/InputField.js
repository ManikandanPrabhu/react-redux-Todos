import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../todos/action/addTodo.action";
import { addText } from "../todos/action/addTodo.action";
import { editAddTodo } from "../todos/action/addTodo.action";

class InputField extends Component {
  handleChange = (e) => {
    console.log("in click method");
    this.props.addText(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.selected || this.props.selected === 0) {
      this.props.editAddTodo({
        value: this.props.text,
        selected: this.props.selected
      });
    } else {
      this.props.addTodo(this.props.text);
    }
  };
  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input
          id="todo-input"
          type="text"
          name="todo"
          value={this.props.text}
          placeholder="Enter your todo..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
  addText: (value) => dispatch(addText(value)),
  editAddTodo: (obj) => dispatch(editAddTodo(obj))
});

const mapStateToProps = (state) => ({
  text: state.text,
  selected: state.selected
});
export default connect(mapStateToProps, mapDispatchToProps)(InputField);
