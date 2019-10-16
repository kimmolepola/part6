const initialMessage = 'Hello store';

export const removeNotification = () => ({ type: 'REMOVE_NOTIFICATION' });

export const setNotification = (text) => ({
  type: 'SET_NOTIFICATION',
  text,
});

const reducer = (state = initialMessage, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.text;
    case 'REMOVE_NOTIFICATION':
      return '';
    default:
      return state;
  }
};
export default reducer;
