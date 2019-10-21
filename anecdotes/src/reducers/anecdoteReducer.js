import anecdoteService from '../services/anecdotes';

export const initializeAnecdotes = () => async (dispatch) => {
  const response = await anecdoteService.getAll();
  dispatch({
    type: 'INIT_ANECDOTES',
    data: response,
  });
};

export const addAnecdote = (content) => async (dispatch) => {
  const response = await anecdoteService.createNew(content);
  dispatch({
    type: 'ADD_ANECDOTE',
    data: response,
  });
};

export const vote = (anecdote) => async (dispatch) => {
  const content = { ...anecdote, votes: anecdote.votes + 1 };
  const response = await anecdoteService.update(content);
  dispatch({
    type: 'VOTE',
    data: response,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data;
    case 'VOTE':
      return state.map((anecdote) => {
        if (anecdote.id === action.data.id) {
          return action.data;
        }
        return anecdote;
      }).sort((a, b) => b.votes - a.votes);
    case 'ADD_ANECDOTE':
      return state.concat(action.data);
    default:
      return state;
  }
};

export default reducer;
