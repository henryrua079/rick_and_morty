import React from "react"
import style from './Favorites.module.css'
import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { actions } from "../../redux/actions";


// const Favorites = () => { 

//     return(

//         <div className={style.fav_cont}>
//         <div>hola</div>
//         </div>
       
//     )

// }


// export default Favorites;

class Favorites extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const handlerFilter = (event) => {
            this.props.filterCards(event.target.value)
        }
        const handlerOrder = (event) => {
            this.props.orderCards(event.target.value)
        }

        return (
            <div>

                <div>
                    <select name="ordenamiento" onChange={handlerOrder}>
                        <option value="Order" disabled='disable'>OrderBy</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                    </select>

                    <select name="filtrado" onChange={handlerFilter}>
                        <option value="Filter" disabled='disable'>FilterBy</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="Unknown">Unknown</option>                        

                    </select>

                </div>


                <div className={style.container} >

                    {/* <SearchBar onSearch={onSearch}></SearchBar> */}
                    {this.props.myFavorites.map(({ id, name, species, gender, image, onClose }) => {
                        return (<Card
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
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        orderCards: (id) => dispatch(orderCards(id)),
        filterCards: (gender) => dispatch(filterCards(gender))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Favorites);



