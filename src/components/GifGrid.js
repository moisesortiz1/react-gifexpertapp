import React /*,{ useEffect, useState }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data,loading} = useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //     .then (setImages);
    // }, [category])

    


    return (
        <>
        <h3 className= "animate__animated animate__bounce">{category}</h3>
        
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        
        <div className="card-grid">
            
            {
                    data.map((img) => (
                        // <li key={img.id}>{img.title}</li>
                        <GifGridItem 
                        key={img.id}
                        {...img}
                        />
                    ))
                }
        </div>
        </>
    )
}


