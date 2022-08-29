import {useContext} from 'react';

import {GlobalModalContext} from '../components/GlobalModalContext/GlobalModalContext';

export const useGlobalModalContext = () => useContext(GlobalModalContext);
