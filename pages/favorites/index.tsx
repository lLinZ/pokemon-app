import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon/';

const FavoritesPage: NextPage = () => {

    const [favorites, setFavorites] = useState<number[]>([])
    useEffect(() => {
        setFavorites(localFavorites.pokemons());
    }, []);
    return (
        <Layout>
            <h1>Pagina de favs</h1>
            {favorites.length > 0 ? (
                <FavoritePokemons pokemons={favorites} />
            ) : (<NoFavorites />)}
        </Layout>
    )
}

export default FavoritesPage;