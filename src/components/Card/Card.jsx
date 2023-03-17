import { useEffect, useState } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite} from '../../redux/actions';


function Card({ id, name, species, gender, image, onClose, deleteFavorite, addFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   // const dispatch = useDispatch();
   // const {myFavorites} = useSelector();

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
      deleteFavorite(id);
      } else {
         setIsFav(true);
         const char = { id, name, species, gender, image, onClose };
         addFavorite(char);
      }
   }


    useEffect (() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   return (
      <div className={style.container}>
         
         {isFav ? (<button className={style.buttonFav} onClick={ handleFavorite}>❤️</button>) : (<button className={style.buttonFav} onClick={handleFavorite}>🤍</button>  )}
         <button className={style.buttonClose} onClick={() => onClose(id)}>X</button>
         
         <Link className={style.name} to={`/detail/${id}`}>
            {name}
         </Link>
         
         <img className={style.image} src={image} alt="" />
         <div className={style.spegen}>
            <h2 className={style.species}>{species}</h2>
            <h2 className={style.gender}>{gender}</h2>
         </div>
      </div>
   );
}






const mapStateToProps = (state) => {
   return{ 
   myFavorites : state.myFavorites
   }
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (char) => { dispatch(addFavorite(char)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
 };



export default connect(mapStateToProps, mapDispatchToProps)(Card);
   