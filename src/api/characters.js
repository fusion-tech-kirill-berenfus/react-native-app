import axios from './axios';

export const getCharactersApi = () => axios('/character/?page=1');
