import { Character } from './character.api-model';
import { Lookup } from 'common/models';


const urlListaCharacter = 'http://localhost:3000/results';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await fetch(`${urlListaCharacter}/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(response.statusText);
  }
};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  if(character.id)
  {
    const response = await fetch(`${urlListaCharacter}/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    return response.ok;
  }else
  {
    const response = await fetch(`${urlListaCharacter}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    return response.ok;
  }
};
