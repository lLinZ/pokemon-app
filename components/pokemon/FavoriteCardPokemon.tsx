import { FC } from "react";
import { useRouter } from "next/router";
import { Card } from "@nextui-org/react";

interface Props {
    pokeId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokeId }) => {
    const router = useRouter();
    const onClicked = () => {
        router.push(`/pokemon/${pokeId}`)
    }
    return (
        <Card clickable hoverable css={{ padding: '10px' }} onClick={onClicked}>
            <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
                width="100%"
                height="140px"
            />
        </Card>
    )
}
