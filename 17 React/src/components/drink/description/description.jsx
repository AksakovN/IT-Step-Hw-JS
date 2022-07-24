import { useState } from "react";
import "./style.css";

export function Desc({ data, id }) {

    function handleClick() {
        let inner = document.querySelector('.inner');
        inner.style.display = 'none';  
    }
    
    return (
        <div className="inner">
            <div className="background"></div>
            <div className="wrapper">
                <div className="description">
                    <div className="close"><input type="button" value="X" onClick={handleClick}/></div>
                    <div className="desc_inner">
                        <div className="desc_image">
                            <img src={data[id].strDrinkThumb} alt="drink" />
                            <h2>{data[id].strDrink}</h2>
                        </div>
                        <div className="desc_body">
                            <h3>How to make:</h3>
                            <p>{data[id].strInstructions}</p>
                            <hr/>
                            <div className="innerFlex">
                                <div className="ingredients">
                                    <h3>Ingredients:</h3>
                                    <ul>
                                        <li>{data[id].strIngredient1}</li>
                                        <li>{data[id].strIngredient2}</li>
                                        <li>{data[id].strIngredient3}</li>
                                        <li>{data[id].strIngredient4}</li>
                                        <li>{data[id].strIngredient5}</li>
                                        <li>{data[id].strIngredient6}</li>
                                        <li>{data[id].strIngredient7}</li>
                                    </ul>
                                </div>
                                <div className="measures">
                                    <h3>Measures:</h3>
                                    <ul>
                                        <li>{data[id].strMeasure1}</li>
                                        <li>{data[id].strMeasure2}</li>
                                        <li>{data[id].strMeasure3}</li>
                                        <li>{data[id].strMeasure4}</li>
                                        <li>{data[id].strMeasure5}</li>
                                        <li>{data[id].strMeasure6}</li>
                                        <li>{data[id].strMeasure7}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}