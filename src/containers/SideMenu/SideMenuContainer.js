import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSideMenu } from '../../modules/sideMenu';

import SideMenu from '../../components/SideMenu/SideMenu';

const SideMenuContainer = () => {
  const dispatch = useDispatch();
  const { open } = useSelector(({ sideMenu }) => ({
    open: sideMenu.open
  }));

  const handleClose = () => {
    dispatch(closeSideMenu());
  };

  return <SideMenu open={open} handleClose={handleClose} />;
};

export default SideMenuContainer;
