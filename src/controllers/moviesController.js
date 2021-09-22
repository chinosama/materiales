const db = require('../database/models');

module.exports = {

    list : (req,res)=> {
        db.Pelicula.findAll()
        .then(movies => {
            return res.render('moviesList',{
                movies
            })
        })
        .catch(error => console.log(error))
    },
    nueva :(req,res) => {

    },
    recommended : (req,res) => {

    },
    detail : (req,res) => {

    }

}