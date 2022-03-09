import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';
export const getPokemonInfo = async (nameOrId: string) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId.toLowerCase()}`);
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (err) {
        return null;
    }

}
