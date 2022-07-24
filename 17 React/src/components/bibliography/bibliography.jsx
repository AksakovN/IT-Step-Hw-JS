import { useState } from "react";
import "./style.css";

export function Card({ data }) {

    const constructor = data.map(i => <div className='table' key={i.id}><h2>{i.name}:</h2> <h2>{i.year}</h2></div>);
    const currTime = new Date().toLocaleTimeString();
    const [newTime, setNewTime] = useState(currTime);

    setInterval(() =>{
        setNewTime(new Date().toLocaleTimeString())
    }, 1000)




    return (
        <div>
            <div className="table" ><h2>Name</h2><h2>Year</h2></div>
            {constructor}
            <h3>Current time = {newTime}</h3>



        </div>
    );
}