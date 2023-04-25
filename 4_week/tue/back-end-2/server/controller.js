const db = require('./db.json');
let id = db.length;

module.exports = {
    getHouses : (req,res) => {
        res.status(200).send(db);
    },
    deleteHouse : (req, res) => {
        let tempId = +req.params.id;
        const index = db.findIndex(el => el.id === tempId);
        db.splice(index, 1);
        res.status(200).send(db);
    },
    createHouse : (req, res) => {
        let newHouse = {...req.body, id: ++id}
        db.push(newHouse);
        res.status(200).send(db);
    },
    updateHouse : (req, res) => {
        let tempId = +req.params.id;
        const index = db.findIndex(el => el.id === tempId);
        let tempType = req.body.type;
        if (tempType === `plus`) {
            db[index].price += 10000; 
        }
        if (tempType === `minus`) {
            if (db[index].price >= 10000) {
                db[index].price -= 10000;
            }
        }
        res.status(200).send(db);
    }
}