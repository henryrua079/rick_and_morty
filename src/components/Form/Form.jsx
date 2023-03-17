/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useNavigate } from "react";
import style from "./Form.module.css"
import  validate  from "./validation";
// import login from 'C:/Users/VICTOR/Desktop/SoyHenry/Rick and Morty/rick_and_morty/src/App.js'


export default function Form ({login})  {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });


    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
         setUserData({...userData, [property]: value});

        setErrors( validate({...userData, [property]:value}));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    
    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.Form}>
                <label htmlFor="username"
                    className={style.username}>Username:</label>

                <input name="username"
                    type="text"
                    value={userData.username}
                    placeholder="Username here.."
                    onChange={handleInputChange}
                    className={errors.username && "warning"} />
                {errors.username && <p className="danger">{errors.username}</p>}


                <label htmlFor="password"
                    className={style.password}>Password:</label>
                <input name="password"
                    type="text"
                    value={userData.password}
                    placeholder="Password here..."
                    onChange={handleInputChange}
                    className={errors.password && "warning"} />
                {errors.password && <p className="danger">{errors.password}</p>}

                <button>LOGIN</button>

            </form>
        </div>
    )
}


