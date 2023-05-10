import { CharacterEntityApi } from './character-collection.api-model';

 const url = 'http://localhost:3000/results';


export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const response = await fetch(url);
  if(response.ok)
  {
    const data = await response.json();
    return data;

  }else

  {
    throw new Error(response.statusText);
  }

};


