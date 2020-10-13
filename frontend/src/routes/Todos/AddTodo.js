import React, { useState } from 'react';
import { addTodo } from '../../redux/actions/todos';
import { connect } from 'react-redux';

function AddTodo(props) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    props.addTodo(input);
    setInput('');
  };

  return (
    <div>
      <input type="text"
        value={input}
        onChange={e => setInput(e.target.value)}/>
      <button onClick={handleAdd} disabled={!input}>+</button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
