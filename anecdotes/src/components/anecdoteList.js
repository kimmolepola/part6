import React from 'react';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';

/* eslint-disable react/prop-types */
const anecdoteList = ({ store }) => {
  const { anecdotes } = store.getState();
  const newVote = (id) => {
    store.dispatch(vote(id));
    store.dispatch(setNotification(`you voted ${anecdotes.find((x) => x.id === id).content}`));
    setTimeout(() => {
      store.dispatch(removeNotification());
    }, 5000);
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
