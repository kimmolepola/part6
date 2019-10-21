import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { vote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = (props) => {
  const { visibleAnecdotes } = props;
  const newVote = (anecdote) => {
    props.vote(anecdote);
    props.setNotification(`you voted ${anecdote.content}`, 5);
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
            <button type="button" onClick={() => newVote(anecdote)}>vote</button>
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
};

const mapStateToProps = (state) => ({
  visibleAnecdotes: anecdotesToShow(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

AnecdoteList.propTypes = {
  visibleAnecdotes: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  vote: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
