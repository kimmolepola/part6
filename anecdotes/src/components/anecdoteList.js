import React from 'react';
import { vote } from '../reducers/anecdoteReducer';

/* eslint-disable react/prop-types */
const anecdoteList = ({ store }) => {
  const anecdotes = store.getState();
  const newVote = (id) => {
    store.dispatch(vote(id));
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button type="button" onClick={() => newVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default anecdoteList;
