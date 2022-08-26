import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// import {fetchCharacters} from '../redux/thunks/fetchCharacters';
import {setCharactersList} from '../redux/charactersSlice';

import {getCharactersApi} from '../api/characters';

export const useCharacters = characterId => {
  const dispatch = useDispatch();
  const {characters, isLoading} = useSelector(store => store.charactersReducer);

  const pullCharacters = useCallback(async () => {
    try {
      const {
        data: {results},
      } = await getCharactersApi();

      const mappedCharactersList = results.map(item => ({
        id: item.id,
        name: item.name,
        gender: item.gender,
        origin: item.origin.name,
        status: item.status,
        species: item.species,
        image: item.image,
      }));

      dispatch(setCharactersList(mappedCharactersList));

      return mappedCharactersList;
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    pullCharacters();
  }, [pullCharacters]);

  /* const setCharacters = useCallback(
    () => dispatch(fetchCharacters()),
    [dispatch],
  ); */

  return {characters, isLoading /* setCharacters */};
};
