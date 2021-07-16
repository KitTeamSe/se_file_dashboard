import qs from 'qs';
import client from './client';

const URL = `attach`;

export const getAttachList = ({ direction, page, size }) => {
  const queryString = qs.stringify({ direction, page, size });

  return client.get(`${URL}?${queryString}`).catch(error => {
    throw error;
  });
};

export const getAttach = ({ id }) =>
  client.get(`${URL}/${id}`).catch(error => {
    throw error;
  });

export const addAttach = ({ multipartFile, postId, replyId }) => {
  const queryString = `?${qs.stringify({ postId, replyId })}`;
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  const formData = new FormData();
  for (let i = 0; i < multipartFile.length; i += 1) {
    formData.append(`multipartFile`, multipartFile[i]);
  }

  return client.post(`${URL}/${queryString}`, formData, config).catch(error => {
    throw error;
  });
};

export const removeAttach = ({ id }) =>
  client.delete(`${URL}/${id}`).catch(error => {
    throw error;
  });

export const getPostAttachList = ({ id }) =>
  client.get(`${URL}/post/${id}`).catch(error => {
    throw error;
  });

export const getReplyAttachList = ({ id }) =>
  client.get(`${URL}/reply/${id}`).catch(error => {
    throw error;
  });
