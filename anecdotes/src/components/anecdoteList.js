import React from 'react';
import { connect } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';

/* eslint-disable react/prop-types */
const AnecdoteList = (props) => {
  const { visibleAnecdotes } = props;
  const newVote = (id) => {
    props.vote(id);
    props.setNotification(`you voted ${visibleAnecdotes.find((x) => x.id === id).content}`);
    setTimeout(() => {
      props.removeNotification();
    }, 5000);
  };
  return (
    <div>
      {visibleAnecdotes.map((anecdote) => (
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

const anecdotesToShow = (state) => state.anecdotes.filter((x) => x.content.includes(state.filter));

const mapDispatchToProps = {
  vote,
  setNotification,
  removeNotification,
};

const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state);
  return {
    visibleAnecdotes: anecdotesToShow(state),
    filter: state.filter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
