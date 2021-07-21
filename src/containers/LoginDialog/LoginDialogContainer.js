import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  initializeAuth,
  signin
} from '../../modules/auth';
import LoginDialog from '../../components/LoginDialog/LoginDialog';
import LogoutDialog from '../../components/LoginDialog/LogoutDialog';

const LoginDialogContainer = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auths, authError } = useSelector(({ auth }) => ({
    form: auth.signin,
    auths: auth.auth,
    authError: auth.authError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    console.log(error);
    e.preventDefault();
    const { id, pw } = form;
    if (id === '') {
      setError('ID 및 비밀번호를 입력하세요');
      console.log('ID 및 비밀번호를 입력하세요');
      return;
    }
    if (pw.length < 4 || pw.length > 12) {
      setError('비밀번호 4자 이상 12자 이하');
      console.log('비밀번호 4자 이상 12자 이하');
      return;
    }
    dispatch(signin({ id, pw }));
    dispatch(initializeForm('signin'));
    console.log('log in');
  };

  const onLogout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setLogin(false);
    console.log('log out');
  };

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
      console.log(authError);
    }
    if (auths) {
      localStorage.setItem(
        'token',
        JSON.stringify(auths.data.token).replaceAll('"', '')
      );
      dispatch(initializeAuth());
      dispatch(initializeForm('signin'));
    }
  }, [auths, authError, dispatch]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  });

  return (
    <>
      {login ? (
        <LogoutDialog onLogout={onLogout} />
      ) : (
        <LoginDialog onSubmit={onSubmit} onChange={onChange} form={form} />
      )}
    </>
  );
};

export default LoginDialogContainer;
