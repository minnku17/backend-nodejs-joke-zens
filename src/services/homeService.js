const db = require('../models');


const handlePostJoke = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("check data>> ", data)
            if(data.idJoke && data.content){
                const exits = await db.Joke.findOne({
                    where: {idJoke: data.idJoke},
                    raw: false,
                    nest: true,
                })
                if(exits){
                    await db.Joke.update(
                        {
                            countLike: data.action === 1 ? exits.countLike + 1 : exits.countLike + 0,
                            countDisLike: data.action === 0 ? exits.countDisLike + 1 : exits.countDisLike + 0
                        },
                        {
                            where: {idJoke: data.idJoke}
                        })
                    resolve({
                        errCode: 0,
                        message: 'Update vote successfully!'
                    })
                } else {
                    await db.Joke.create({
                        idJoke: data.idJoke,
                        content: data.content,
                        countLike: data.action === 1 ? 1 : 0,
                        countDisLike: data.action === 0? 1 : 0,
                    })
                    resolve({
                        errCode: 0,
                        message: 'Update vote successfully!'
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    handlePostJoke
};
