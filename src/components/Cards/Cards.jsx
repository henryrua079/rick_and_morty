import Card from '../Card/Card';
import style from './Cards.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Cards({ characters, onClose, onSearch }) {

   return (

      <div className={style.container} >

      
           {/* <SearchBar onSearch={onSearch}></SearchBar> */}
        


         {characters.map(({id, name, species, gender, image }) => {

            return (
               <Card
                  key={id}       // react siempre esta pidiendo el key, se le asigna como key el id, el cual es el unico diferente en toda la app
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose} 
               />
            );
         })}
      </div>
   );
}
