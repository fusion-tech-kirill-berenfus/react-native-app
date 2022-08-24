import React from 'react';
import {NotifierWrapper} from 'react-native-notifier';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import StackContainer from './navigation/Stack';

import {persistor, store} from './redux/store';

const App = () => {
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackContainer />
        </PersistGate>
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
