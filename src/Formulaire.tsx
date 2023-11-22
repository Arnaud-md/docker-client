import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Formulaire = () => {

    const [pseudo, setPseudo]=useState("");
    const [helloMsg, sethelloMsg]=useState("");
    const navigate = useNavigate();
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('new value', e.target.value)
    
                setPseudo(e.target.value)
    }, [])
    const handleClick = useCallback(async()=> {
        console.log("http://localhost:3000/hello/"+pseudo);
        const response = await fetch("http://localhost:3000/hello/"+pseudo)
            //const data = await response.json()
            const data = await response.text()
            // console.log('response ', data.data)
            // sethelloMsg(data.data);
            sethelloMsg(data);
    },[pseudo])

    const effet = useEffect(()=>{
        console.log("helloMsg : "+helloMsg);
    },[helloMsg]
    )
    

    return (
        <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleClick}>Soumettre</button>
            <p>{helloMsg}</p>
        </div>
    );
};

export default Formulaire;