import Link from "next/link";

export function Header(){
    return(
        <header className="bg-brand-dark flex flex-col items-center p-6 gap-y-3 md:flex-row md:justify-between">

            <img src="/assets/logo.svg" alt="Logotipo"/>

            <nav className="flex gap-x-16">
                <Link href="/" className="hover:text-brand-blue-light">Início</Link>
                <Link href="/filmes" className="hover:text-brand-blue-light">Filmes</Link>
                <Link href="/series" className="hover:text-brand-blue-light">Séries</Link>
            </nav>

        </header>
    )
}