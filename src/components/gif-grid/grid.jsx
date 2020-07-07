import React from "react";

import GifGridItem from "../gif-grid-item/item";
import { useFetchGifs } from "../../hooks/use-fetch-gifs";

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading  && <span className="animate__animated animate__flash">Cargando...</span> }
            <div className="card-grid">
                {
                    data.map(({id, ...otherValues}) => (
                        <GifGridItem
                            key={id}
                            {...otherValues}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;