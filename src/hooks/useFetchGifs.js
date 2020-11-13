// comienza con la palabra use, ya que asi se sabe que es un hook

import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = category => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

 // //Se añade category al segundo parametro [] en caso de que la categoria cambie y se necesite
    // //ejecutar useEffect :). Si no se pone saldrá un warning
    useEffect( () => {
        getGifs(category)
            .then(imgs => {
                    setState({
                        data: imgs,
                        loading: false
                    });
            });

    },[category])

    return state; //{data: [], loading: true}
}