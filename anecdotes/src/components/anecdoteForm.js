import React from 'react';
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';


/* eslint-disable react/prop-types */
const AnecdoteForm = (props) => {
  const newAnecdote = (event) => {
    event.preventDefault();
    props.addAnecdote(event.target.anecdote.value);
    props.setNotification(`you created ${event.target.anecdote.value}`);
    setTimeout(() => {
      props.removeNotification();
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default connect(null, { addAnecdote, setNotification, removeNotification })(AnecdoteForm);
