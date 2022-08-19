import axios from './axios';

export const getCharacters = () => axios('/character/?page=1');
