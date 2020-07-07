import React, { useState } from 'react';

import AddCategory from "./components/category/add";
import GifGrid from "./components/gif-grid/grid";

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Punch']);

    /*const handleAdd = () => {
        setCategories([...categories, 'Hunter']);
        // setCategories(cats => [...cats, 'HunterXHunter']);
    }*/
    return (
        <>
            <h2>GifExpertapp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            {
                categories.map(category => (<GifGrid key={category} category={category} />))
            }
        </>
    )
}

export default GifExpertApp;