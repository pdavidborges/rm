"use client"

import { getData } from "@/api/tmdb";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {BarLoader} from 'react-spinners';

export function List({ tipo }) {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadData() {

            try {
                const {data, error } = await getData(tipo);

                if (error) {
                    setError(error);
                } else {
                    //console.log(data);
                    setItems(data);
                    setLoading(false);
                }
            }

            catch (error) {
                console.log(error);
            }
        }

        loadData();
    }, [])

    if (error) {
        return <h1>Erro de acesso a API</h1>
    }

    if(loading){
        //https://www.davidhu.io/react-spinners/
        return <BarLoader color="#36d6b9" width={'100%'} speedMultiplier={2} />        
    }

    return (
        // <h1>Listagem de {tipo}</h1>

        <div className="max-w-[1140px] mx-auto my-16 flex flex-wrap justify-center gap-7">

            {
                items.map(item => (
                    //console.log(item)

                    <div className="relative" key={item.id}>
                        <Link href={`/detalhes/${tipo}/${item.id}`} className="hover:brightness-150">
                            <Image
                                className="w-[360px] h-[200px] object-cover rounded-lg opacity-50"
                                alt={`Imagem ${tipo} ${item.title}`}
                                width={500}
                                height={500}
                                quality={75}
                                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />

                            <div className="absolute bottom-3 left-3 font-bold">
                                <h2 className="text-2xl"> {tipo == 'filmes' ? item.title : item.name}</h2>
                                <h3>Ano: {tipo == 'filmes' ? item.release_date.substr(0,4) : item.first_air_date.substr(0,4)}</h3>
                                <span className="flex gap-x-3 text-brand-yellow">
                                    <Image alt="ícone estrela" width={16} height={16} src="/assets/star.svg" /> {item.vote_average.toFixed(1)}
                                </span>
                            </div>
                        </Link>
                    </div>

                ))
            }



        </div >
    )

}