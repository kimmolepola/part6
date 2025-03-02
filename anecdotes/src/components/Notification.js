import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div style={style}>
      {notification}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps)(Notification);
Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};
