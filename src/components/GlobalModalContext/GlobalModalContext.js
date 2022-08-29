import React, {createContext, useState} from 'react';

import ErrorModal from '../ErrorModal';

const MODAL_TYPES = {
  error: ErrorModal,
};

const initialState = {
  showModal: () => {},
  hideModal: () => {},
};

export const GlobalModalContext = createContext(initialState);

const GlobalModal = ({children}) => {
  const [store, setStore] = useState(null);
  const {type, ...modalProps} = store || {};

  const showModal = newStore => setStore(newStore);

  const hideModal = () => setStore(null);

  const renderComponent = () => {
    const ModalComponent = MODAL_TYPES[type];

    if (!type || !ModalComponent) {
      return null;
    }

    return <ModalComponent {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{showModal, hideModal}}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};

export default GlobalModal;
