import React from 'react';
import { Button } from 'react-bootstrap';

const LoginLayout = ({ handleSubmit, state, handleInputChange }) => {
  return (
    <div>
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
        <input type="submit" value="Login" />
      </form>
      <Button>Default</Button>
    </div>
  );
};

export default LoginLayout;
