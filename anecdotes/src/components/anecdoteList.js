import React from 'react';
import { connect } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification, removeNotification } from '../reducers/notificationReducer';

/* eslint-disable react/prop-types */
const AnecdoteList = (props) => {
  const { anecdotes } = props;
  const newVote = (id) => {
    props.vote(id);
    props.setNotification(`you voted ${anecdotes.find((x) => x.id === id).content}`);
    setTimeout(() => {
      props.removeNotification();
    }, 5000);
  };
  return (
    <div>
      {anecdotes.filter((x) => x.content.includes(props.filter)).map((anecdote) => (
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

const mapDispatchToProps = {
  vote,
  setNotification,
  removeNotification,
};

const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  console.log(state);
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
