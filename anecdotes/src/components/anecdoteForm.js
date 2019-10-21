import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const newAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = ''; // eslint-disable-line no-param-reassign
    props.addAnecdote(content);
    props.setNotification(`you created ${content}`, 5);
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

export default connect(null, { addAnecdote, setNotification })(AnecdoteForm);

AnecdoteForm.propTypes = {
  addAnecdote: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
};
