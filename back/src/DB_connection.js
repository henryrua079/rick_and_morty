require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD } = process.env;

const UserModel = require("./models/User")
const FavoriteModel = require("./models/Favorite")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`;

const sequelize = new Sequelize(
    URL,
    { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

UserModel(sequelize);
FavoriteModel(sequelize);


const { Favorite, User } = sequelize.models

Favorite.belongsToMany(User, { through: "user_favorite" });
User.belongsToMany(Favorite, { through: "user_favorite" });



// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;



module.exports = {
    User,
    Favorite,
    conn: sequelize,
};