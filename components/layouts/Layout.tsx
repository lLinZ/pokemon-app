import { FC } from "react"

import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
    title?: string;
    tipoPokemon?: string;
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin
export const Layout: FC<Props> = ({ children, title, tipoPokemon }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Linz web development (Jose Linares)" />
                <meta name="description" content={`Informacion sobre el pokemon ${tipoPokemon}`} />
                <meta name="keywords" content={`pokemon, pokemones, pokedex, ${tipoPokemon}`} />

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main style={{ padding: "0px 20px" }}>
                {children}
            </main>
        </>
    )
}