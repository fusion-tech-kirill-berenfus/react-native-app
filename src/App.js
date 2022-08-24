import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNBootSplash from 'react-native-bootsplash';

import StackContainer from './navigation/Stack';

import {persistor, store} from './redux/store';

import {notificationListener, requestUserPermission} from './utils/pushHandler';

const App = () => {
  useEffect(() => {
    const init = async () => {
      await requestUserPermission();
      notificationListener();
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
