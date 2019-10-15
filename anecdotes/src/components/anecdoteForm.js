import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';

/* eslint-disable react/prop-types */
const anecdoteForm = ({ store }) => {
  const newAnecdote = (event) => {
    event.preventDefault();
    store.dispatch(addAnecdote(event.target.anecdote.value));
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

export default anecdoteForm;
