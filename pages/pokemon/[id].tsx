import { useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Router, { useRouter } from 'next/router';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { localFavorites } from '../../utils';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';

interface Props {
    pokemon: Pokemon;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const [isFavorite, setIsFavorite] = useState(localFavorites.existsInFavorites(pokemon.id))

    const onToggleFav = () => {
        const { id } = pokemon;
        localFavorites.toggleFavorite(id);
        setIsFavorite(prev => !prev);
        if (isFavorite) return;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -90,
            origin: {
                x: 0.5,
                y: 0,
            },
        })
    }

    return (
        <Layout title={pokemon.name} tipoPokemon={pokemon.name}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width="100%"
                                height="200px"
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid.Container xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: "flex", justifyContent: "space-between" }} >
                            <Text h1 transform="capitalize">{pokemon.name}</Text>
                            <Button ghost={!isFavorite} color="gradient" onClick={onToggleFav}>{isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction="row" display="flex" gap={0}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid.Container>
            </Grid.Container>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((value, i) => `${i + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id);

    // Si no existe el pokemon solicitado
    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    // Si existe el pokemon solicitado
    return {
        props: {
            pokemon
        },
        revalidate: 86400, // 60 * 60 * 24
    }
}
export default PokemonPage;