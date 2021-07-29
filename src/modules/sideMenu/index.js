import { createAction, handleActions } from 'redux-actions';

// Actions
const INITIALIZE = 'sideMenu/INITIALIZE';
const OPEN_SIDE_MENU = 'sideMenu/OPEN_SIDE_MENU';
const CLOSE_SIDE_MENU = 'sideMenu/CLOSE_SIDE_MENU';

// Action Creators
export const initialize = createAction(INITIALIZE);
export const openSideMenu = createAction(OPEN_SIDE_MENU);
export const closeSideMenu = createAction(CLOSE_SIDE_MENU);

// Sagas

// reducer (handleActions => switch문 대체)
const initialState = {
  open: false
};

export default handleActions(
  {
    [INITIALIZE]: () => initialState,
    [OPEN_SIDE_MENU]: () => ({
      open: true
    }),
    [CLOSE_SIDE_MENU]: () => ({
      open: false
    })
  },
  initialState
);
