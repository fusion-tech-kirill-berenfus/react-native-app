import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut} from '../redux/userSlice';

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const {username} = useSelector(state => state.userReducer);

  const logInUser = useCallback(user => dispatch(logIn(user)), [dispatch]);
  const logOutUser = useCallback(() => dispatch(logOut()), [dispatch]);

  return {username, logInUser, logOutUser};
};
