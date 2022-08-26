import {createSlice} from '@reduxjs/toolkit';

import {fetchCharacters} from './thunks/fetchCharacters';

const initialState = {
  characters: [],
  isLoading: false,
  isError: false,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharactersList: (state, action) => {
      state.characters = action.payload;
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter(
        item => item.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.characters = action.payload;
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

export const {deleteCharacter, setCharactersList} = charactersSlice.actions;

export default charactersSlice.reducer;
