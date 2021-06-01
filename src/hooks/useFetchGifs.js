import {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs'

export const useFetchGifs = (category) =>{

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    //Aqui es donde se hara la peticion para traer las imagenes
    //No pueden ser async porque esperan algo sincrono por eso usaremos promesas
    useEffect(()=> {

        getGifs(category)
        .then( imgs => {
            setState({
                data: imgs,
                loading: false
            })
        })
    // Se evalua unicamente cuando la categoria cambia
    }, [category]);

    return state;

}