import {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deleteCharacter} from '../redux/charactersSlice';

export const useCharacter = characterId => {
  const dispatch = useDispatch();
  const {characters} = useSelector(store => store.charactersReducer);

  const deleteCharacterById = useCallback(
    () => dispatch(deleteCharacter(characterId)),
    [dispatch, characterId],
  );

  const character = useMemo(
    () => characters.find(({id}) => id === characterId),
    [characters, characterId],
  );

  return {character, deleteCharacterById};
};
