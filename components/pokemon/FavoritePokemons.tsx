import { FC } from "react";
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from "./";
interface Props {
    pokemons: number[];
}
export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2}>
            {pokemons.map(pokeId => (
                <Grid xs={6} sm={3} md={2} xl={1} key={pokeId} >
                    <FavoriteCardPokemon pokeId={pokeId as number} />
                </Grid>
            ))}
        </Grid.Container>
    )
}
