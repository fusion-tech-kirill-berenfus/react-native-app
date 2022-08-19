import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCharacters} from '../api/characters';

export const fetchCharacters = createAsyncThunk('list/characters', async () => {
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
});

const initialState = {
  list: [],
  isLoading: false,
  isError: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, state => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchCharacters.pending, state => {
      state.isLoading = true;
    });
  },
});
