import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    //categories = ['One Punch','Samurai X','Dragon Ball'];
    
    // const handleAdd = () => {
    //     //setCategories(['HunterXHunter',...categories])
    //     setCategories(cats => [...cats,'HunterXHunter']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

           {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={category}
                        category = {category}
                    />
                ))
            }
        </ol>
        </>
    );
}

export default GifExpertApp;