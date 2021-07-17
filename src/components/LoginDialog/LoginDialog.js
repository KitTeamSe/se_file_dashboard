// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   changeField,
//   initializeForm,
//   initializeAuth,
//   signin
// } from '../../modules/auth';

// const LoginDialogContainer = ({ handleClose, type }) => {
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const { form, auths, authError } = useSelector(({ auth }) => ({
//     form: auth.signin,
//     auths: auth.auth,
//     authError: auth.authError
//   }));

//   const onChange = e => {
//     const { value, name } = e.target;
//     dispatch(
//       changeField({
//         form: 'signin',
//         key: name,
//         value
//       })
//     );
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     const { id, pw } = form;
//     if (id === '') {
//       setError('ID 및 비밀번호를 입력하세요');
//       return;
//     }
//     if (pw.length < 4 || pw.length > 12) {
//       setError('비밀번호 4자 이상 12자 이하');
//       return;
//     }
//     dispatch(signin({ id, pw }));
//   };

//   useEffect(() => {
//     if (authError) {
//       setError('로그인 실패');
//     }
//     if (auths) {
//       localStorage.setItem(
//         'token',
//         JSON.stringify(auths.data.token).replaceAll('"', '')
//       );
//       dispatch(initializeAuth());
//       dispatch(initializeForm('signin'));
//       handleClose();
//     }
//   }, [auths, authError, dispatch]);

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         id="id"
//         name="id"
//         label="ID"
//         onChange={onChange}
//         value={form.id}
//         type="id"
//       />
//       <input
//         id="pw"
//         name="pw"
//         label="PW"
//         onChange={onChange}
//         value={form.pw}
//         type="password"
//       />
//     </form>
//   );
// };

// LoginDialogContainer.propTypes = {
//   handleClose: PropTypes.func.isRequired
// };

// LoginDialogContainer.defaultProps = {};

// export default LoginDialogContainer;
