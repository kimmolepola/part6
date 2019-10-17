import React from 'react';
import AnecdoteForm from './components/anecdoteForm';
import AnecdoteList from './components/anecdoteList';
import Notification from './components/notification';
import Filter from './components/filter';

/* eslint-disable react/prop-types */
const App = () => (
  <div>
    <Notification />
    <h2>Anecdotes</h2>
    <Filter />
    <AnecdoteList />
    <AnecdoteForm />
  </div>
);
/* eslint-enable react/prop-types */

export default App;
