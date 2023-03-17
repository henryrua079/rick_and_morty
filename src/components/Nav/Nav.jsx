import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink} from "react-router-dom";
import style from "./Nav.module.css"


export default function Nav (props){

    return (
        <div className={style.nav}>


            <div className={style.bus}>
                <SearchBar onSearch={props.onSearch}></SearchBar>
            </div>

            <div className={style.opc}>

                <div className={style.letras}>
                    <NavLink className={style.home} to={'/home'}>
                        <h2 > HOME</h2>
                    </NavLink>
                </div>

                <div>
                    <NavLink className={style.home} to={'/favorites'}>
                        <h2 >FAVORITES</h2>
                    </NavLink>
                </div>
                <div>
                    <NavLink className={style.home} to={'/about'}>
                        <h2>ABOUT</h2>
                    </NavLink>
                </div>
                <div>
                    <NavLink className={style.home} to={'/'}>
                        <h2>LOGOUT</h2>
                    </NavLink>

                </div>
            </div >


        </div>

    )

}