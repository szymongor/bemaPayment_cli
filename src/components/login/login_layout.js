import React from 'react';

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login:
        <input
          type="text"
          name="username"
          value={state.login}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginLayout;
