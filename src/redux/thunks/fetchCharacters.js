import {createAsyncThunk} from '@reduxjs/toolkit';
import {getCharacters} from '../../api/characters';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const {data} = await getCharacters();

    const result = data.results.map(item => ({
      id: item.id,
      name: item.name,
      gender: item.gender,
      origin: item.origin.name,
      status: item.status,
      species: item.species,
      image: item.image,
    }));

    return result;
  },
);
