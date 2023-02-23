import db from '../models/index';
import {handlePostJoke} from '../services/homeService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.Joke.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    }catch(e) {
        console.log(e);
    }
}
const postActionJoke = async (req, res) => {
    try {
        console.log("check controller", req.query.idJoke)
        const response = await handlePostJoke(req.body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHomePage: getHomePage,
    postActionJoke: postActionJoke
}