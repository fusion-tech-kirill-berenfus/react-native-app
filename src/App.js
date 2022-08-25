import React from 'react';
import {NotifierWrapper} from 'react-native-notifier';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import StackContainer from './navigation/Stack';

import {persistor, store} from './redux/store';

import GlobalModal from './components/GlobalModalContext';

const App = () => {
  return (
    <NotifierWrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalModal>
            <StackContainer />
          </GlobalModal>
        </PersistGate>
      </Provider>
    </NotifierWrapper>
  );
};

export default App;
