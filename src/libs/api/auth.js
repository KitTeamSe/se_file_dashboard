import axios from 'axios';
import client from './client';

export const signin = ({ id, pw }) => {
  const data = {
    id: { id }.id,
    pw: { pw }.pw
  };
  return axios
    .post('http://swagger.se-testboard.duckdns.org/api/v1/signin/manager', data)
    .catch(error => {
      throw error;
    });
};

export const signup = ({
  answer,
  email,
  id,
  name,
  nickname,
  password,
  phoneNumber,
  questionId,
  studentId,
  type
}) =>
  client.post('signup', {
    answer,
    email,
    id,
    name,
    nickname,
    password,
    phoneNumber,
    questionId,
    studentId,
    type
  });
