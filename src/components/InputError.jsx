import React from 'react';

function InputError(message) {
  return <div className="error-message">{message.message}</div>;
}

export default InputError;
