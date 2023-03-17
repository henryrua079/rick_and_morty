import React from 'react'
import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx'
import Favorites from './components/Favorites/Favorites.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from './components/Form/Form'
import Card from './components/Card/Card'


function App (props) {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

//!Funcion para hacer peticion a la api de una card pasando la id.

  const onSearch = (id) => {                                //recibe el id del personaje
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "4fd12c84aec2.d28eaefd84c3df1a2e0f";
    if (characters.find((char) => char.id === id)) {
      return alert("Card repetida")
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)         //recibe la url de la api
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);  //se pasa una funcion que retorna el valor viejo y retorna el valor nuevo
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }



 //! funcion para cerrar una carta 

  const onClose = (id) => {         //funcion para cerrar la card
    setCharacters(characters.filter((char) => char.id !== id));
  };
 


  const navigate = useNavigate();
  const username = 'hola@gmail.com';
  const password = 'hola123';


  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }else{
      alert("Datos incorrectos")
    }
  }


useEffect(() => { !access && navigate('/') }, [access]);
  
  

  const location = useLocation();

  // if(location.pathname === "/"){
  

  return (

    <div className={style.App} >
      <div>

        {location.pathname === '/' ? <Form login={login} />: <Nav onSearch={onSearch} />}
      
      </div>
      <div>

      <Routes>
        


          <Route path="/home"                 // cuando esta aca muestra el element (browser)
            element={<Cards onSearch={onSearch} 
            characters={characters} 
            onClose={onClose} />}>
          </Route>



          <Route path="/favorites"                 // cuando esta aca muestra el element (browser)
            element={<Favorites />}>
          </Route>



          <Route path="/about"
            element={<About />}>
          </Route>


          <Route path="/detail/:detailId" 
            element={<Detail />}>
          </Route>


      </Routes>
      </div>
    </div>
  )
// }
}


export default App;
