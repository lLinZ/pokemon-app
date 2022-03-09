import { Container, Text, Image } from '@nextui-org/react'

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vs - 100px)',
            alignItems: 'center',
            justifyContent: "center",
            alignSelf: "center",
        }}>
            <Text h1> No hay favoritos</Text>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
                alt="default no favoritos v"
                width={250}
                height={250}
                css={{ opacity: '0.1' }}
            />
        </Container>
    )
}
