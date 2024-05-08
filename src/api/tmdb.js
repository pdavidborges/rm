import axios from "axios";


export async function getData(tipo){
    //tipo -> filmes/series
    //console.log(tipo);
    
    let categoria = tipo == 'filmes' ? 'movie' : 'tv';

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/top_rated`,{
            params : {
                api_key : 'da2d5c042225a0ba6c641ca4f441ddf2',
                page : 1,
                language : 'pt-BR'
            }
        })

        console.log(response.data.results);
        return {data : response.data.results}
    }

    catch(error){
        //console.log(error);
        return {error : error.message};
    }

}

export async function getDataId(tipo, id){

    let categoria = tipo == 'filmes' ? 'movie' : 'tv';

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${categoria}/${id}`,{
            params : {
                api_key : 'da2d5c042225a0ba6c641ca4f441ddf2',                
                language : 'pt-BR'
            }
        })
        
        return {data : response.data}
    }

    catch(error){
        return {error : error.message};
    }
}