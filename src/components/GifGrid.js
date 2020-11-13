import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__backInLeft">{category}</h3>
        {/* Si el primero es verdadero, el segundo se evalua. Si no, no pasa al segundo */}
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className="card-grid">
           
               {
                   images.map(img => 
                      <GifGridItem 
                      key={img.id}
                    //   img={img}
                      {...img}
                      />
                   )
               }
           
        </div>
        </>
    )
}
