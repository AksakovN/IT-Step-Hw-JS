import { useState } from "react";
import { Desc } from "./description/description";
import "./style.css";

export function Drinks({ data }) {

    const [id, setId] = useState(0);
    const [isShow, setIsShow] = useState(false);
    function handlerclick(event) {
        setIsShow(!isShow);
        setTimeout(() => {
            if (isShow === true) {
                setIsShow(true);
            }
        }, 10);
        setId(event.target.name);
    }
    const drink = data.map((i, index) => <div className="card" key={i.idDrink}><img src={i.strDrinkThumb} alt="drink" />
        <h2>{i.strDrink}</h2>
        <input type="button" name={index} value="More details..." onClick={handlerclick}>
        </input>
    </div>
    )




    return (
        <div>
            <div className="container">{drink}</div>

            {isShow && <Desc data={data} id={id} />}
        </div>
    )
}