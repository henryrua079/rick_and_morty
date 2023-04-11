const { User } = require("../models/User");

const PostUser = async (req, res) => {

    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400).json('Faltan datos')
    }else{

        try {
            const [user, created] = await User.findOrCreate({
                where: {
                    user: user,
                    password: password,
                }
            });

            if(user) res.status(200).json(user)

        } catch (error) {
            res.status(500).json({error: error.messge})

        }

    }


 }


module.exports = PostUser;