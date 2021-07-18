import React from 'react';

const LoginDialog = ({ onSubmit, onChange, form }) => {
  return (
    <>
      <form>
        <input
          id="id"
          name="id"
          label="ID"
          onChange={onChange}
          value={form.id}
          type="id"
        />
        <input
          id="pw"
          name="pw"
          label="PW"
          onChange={onChange}
          value={form.pw}
          type="password"
        />
      </form>
      <button type="submit" onClick={onSubmit}>
        login
      </button>
    </>
  );
};

export default LoginDialog;
