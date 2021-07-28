import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openSideMenu } from '../../modules/sideMenu';

import Header from '../../components/Header/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { open } = useSelector(({ sideMenu }) => ({
    open: sideMenu.open
  }));

  const handleOpen = () => {
    dispatch(openSideMenu());
  };

  return <Header open={open} handleOpen={handleOpen} />;
};

export default HeaderContainer;
