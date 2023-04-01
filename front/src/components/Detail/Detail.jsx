/* eslint-disable jsx-a11y/alt-text */
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
        const URL_BASE = "http://localhost:3001";
        axios(`${URL_BASE}/detail/${detailId}`)
        .then((response) => setCharacter(response.data));
    }, []);    

    return (
        <div className={style.cont}>
            
          {character.name ? (
               <><div className={style.detail}>
                    <h2>name: {character.name}</h2>
                    <p>status: {character.status}</p>
                    <p>species: {character.species}</p>
                    <p>gender: {character.gender}</p>
                    <p>origin:{character.origin?.name}</p>

                </div><div>
                        <img className={style.imagen} src={character.image} alt="imag" />
                    </div></>
            ) : (
                <div>
                  
                    <img className={style.imagen1} src='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif' />
                </div>

                // <h1>load...</h1>

            )}
    

        </div>

    )
}

export default Detail;