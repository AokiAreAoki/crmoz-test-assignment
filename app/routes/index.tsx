import React, {useEffect} from 'react';
import {FC} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-native';
import UsersScreen from './UsersScreen';
import UserScreen from './UserScreen';
import {Alert, BackHandler} from 'react-native';
import HomeScreen from './HomeScreen';

const AppRouter: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function backAction() {
      if (location.pathname !== '/') {
        navigate(-1);
      } else {
        Alert.alert(
          'Hold on!',
          'Are you sure you want to go back?',
          [
            {text: 'Cancel', onPress: () => null, style: 'cancel'},
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ],
          {cancelable: true},
        );
      }

      return true;
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" Component={HomeScreen} />
      <Route path="/users" Component={UsersScreen} />
      <Route path="/users/:id" Component={UserScreen} />
    </Routes>
  );
};

export default AppRouter;
