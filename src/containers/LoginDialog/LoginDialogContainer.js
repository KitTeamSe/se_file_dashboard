import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeField,
  initializeForm,
  initializeAuth,
  signin
} from '../../modules/auth';
import LoginDialog from '../../components/LoginDialog/LoginDialog';

const LoginDialogContainer = () => {
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
    e.preventDefault();
    const { id, pw } = form;
    if (id === '') {
      console.log('ID 및 비밀번호를 입력하세요');
      return;
    }
    if (pw.length < 4 || pw.length > 12) {
      console.log('비밀번호 4자 이상 12자 이하');
      return;
    }
    dispatch(signin({ id, pw }));
    dispatch(initializeForm('signin'));
  };

  useEffect(() => {
    if (authError) {
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

  return <LoginDialog onSubmit={onSubmit} onChange={onChange} form={form} />;
};

export default LoginDialogContainer;
