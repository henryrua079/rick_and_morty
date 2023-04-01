const axios = require("axios")
// const {URL, KEY} = process.env;



const URL = 'https://be-a-rym.up.railway.app/api';
const KEY = '4fd12c84aec2.d28eaefd84c3df1a2e0f'



const getCharDetail = (req, res) => {
    const {id} = req.params;
    axios.get(`${URL}/character/${id}?key=${KEY}`)
        .then(response => {
            const { id, name, status, species, image, gender, origin } = response.data;
            res.status(200).json({ id, name,status, species, image, gender, origin })

        }).catch((error) => {
            res.status(500).json({ error: error.message })
        })
}



 module.exports = getCharDetail;