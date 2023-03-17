/* eslint-disable no-useless-constructor */
import React from "react";
import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"


const Detail = () => {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {                                           //useEffect recibe una cb y un array
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "4fd12c84aec2.d28eaefd84c3df1a2e0f";
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => setCharacter(response.data));
    }, []);    

    return (
        <div className={style.cont}>
            <div className={style.detail}>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.specie}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
            </div>
            <div >
                <img  className={style.imagen}  src={character.image} alt="imag" />
            </div>

        </div>

    )
}

export default Detail;