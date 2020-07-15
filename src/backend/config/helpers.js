const MySqli = require('mysqli');

let conn = new MySqli({
    host: 'localhost',
    user: 'root',
    password: 'ngochai6799',
    db: 'mega_shop'
})

let db = conn.emit(false, '');

module.exports = {
    database: db
};