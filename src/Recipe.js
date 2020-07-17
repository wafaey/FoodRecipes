import React from 'react' ;
import style from './recipe.module.css'


const Recipe = ({title,src,calories,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                )
                )}
            </ul>
            <p>{calories}</p>
            <img className={style.image} src={src} alt=""></img>
        </div>
    );
}

export default Recipe;
