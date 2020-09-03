import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import logo from '././assets/titulo.png'

export const GifExpertApp = () => {
    // const categories = ['Rasta','Pony','Bola 8']
    const [categories, setCategories] = useState(['Bola 8']);
    // const handleAdd = () => {
    //     setCategories(c => [...c, 'Bomberman']);
    //     //    setCategories([...categories,'Bomberman']);

    // }
    return (
        <>
            <img class="logo animate__animated animate__jackInTheBox" src={logo} alt="ToskoGifs" ></img>

            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map(category => (<GifGrid
                    key={category}
                    category={category} />
                )
                )
                }
            </ol>
        </>
    )
}
