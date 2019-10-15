import React from 'react';
import AnecdoteForm from './components/anecdoteForm';
import AnecdoteList from './components/anecdoteList';

/* eslint-disable react/prop-types */
const App = ({ store }) => (
  <div>
    <h2>Anecdotes</h2>
    <AnecdoteList store={store} />
    <AnecdoteForm store={store} />
  </div>
);
/* eslint-enable react/prop-types */

export default App;
