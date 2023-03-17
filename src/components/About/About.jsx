/* eslint-disable no-useless-constructor */
import React from "react";
import style from "./About.module.css"


class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>

                <h1 className={style.About}>Holis, soy el componente About</h1>


            </>

        );
    }
}


export default About;







// import React from "react";
// import style from "./About.module.css" 

// export default function About() {
//     return(
//         <div>
//             <h1  className={style.About}>Hola Soy Victor</h1>
//         </div>

//     );
// }