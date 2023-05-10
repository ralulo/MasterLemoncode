import { CharacterEntityApi } from './character-collection.api-model';

 const url = 'https://rickandmortyapi.com/api/character/';


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(url);
  if(response.ok)
  {
    const data = await response.json();
    return data.results;

  }else

  {
    throw new Error(response.statusText);
  }

};


