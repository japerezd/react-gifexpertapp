import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man']);

    // const  handleAdd = () => {
    //     setCategories([...categories, 'DragonBall']);
    // }

    return (
        <>
            <h2 className="animate__animated animate__jello">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>
        </>
    )
};