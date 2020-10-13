import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';

import styles from './Todos.module.css';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

function Todos (props) {
  return (
    <>
      <h1 className={styles.otherway}>Todos <span>list</span></h1>
      <AddTodo/>
      <ul className={styles.noListStyle}>
        {props.todos?.map(i => <Todo todo={i} key={i.id}/>)}
      </ul>
    </>
  )
}

export default connect(mapStateToProps)(Todos);
