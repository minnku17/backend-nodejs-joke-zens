import db from '../models/index';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs',{
            data: JSON.stringify(data)
        })
    }catch(e) {
        console.log(e);
    }
}
const postActionJoke = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getHomePage: getHomePage,
    postActionJoke: postActionJoke
}