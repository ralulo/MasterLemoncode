export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  episode: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  species: '',
  status: '',
  type: '',
  gender: '',
  origin: { name: '', url: ''},
  episode: [],
});
