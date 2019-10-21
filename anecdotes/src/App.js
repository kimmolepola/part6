import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnecdoteForm from './components/anecdoteForm';
import AnecdoteList from './components/anecdoteList';
import Notification from './components/notification';
import Filter from './components/filter';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = (props) => {
  useEffect(() => {
    props.initializeAnecdotes();
  }, [props]);
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default connect(null, { initializeAnecdotes })(App);

App.propTypes = {
  initializeAnecdotes: PropTypes.func.isRequired,
};
