import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (  
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image}/>
            <p>{Math.round(calories)} Calories</p>
            <ul>
                {ingredients.map((ingredient,id) => (
                    <li key={id}>{ingredient.text}</li>
                ))}
                
            </ul>
        </div>
    );
}
 
export default Recipe;