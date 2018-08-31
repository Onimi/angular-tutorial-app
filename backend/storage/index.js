const path = require('path');

const pfs = require('../library/promisifiedFS.js');

const DATA_SOURCE = path.join(__dirname, 'storage.json');

const __getData = function () {
    return pfs.readFile(DATA_SOURCE, 'utf8');
};

const __setData = function (data) {
    return pfs.writeFile(DATA_SOURCE, JSON.stringify(data), 'utf8');
}

const getAll = function () {
    return __getData()
        .then( data => data.toString() )
        .then( data => JSON.parse(data) );
}

const getById = function (id) {
    return getAll()
        .then( data => data.find(item => item.id == id) );
}

const find = function (name) {
    const regex = new RegExp(name, 'i');
    return getAll()
        .then( data => data.filter( item => regex.test(item.name) ) )
}

const update = function (hero) {
    return getAll()
        .then( data => data.map( item => item.id == hero.id ? hero : item ) )
        .then( data => __setData( data ) );
}

const add = function (hero) {
    return getAll()
        .then(data => {
            hero.id = data.reduce( (acc, item) => item.id > acc ? item.id : acc, 0 ) + 1;
            data.push(hero);
            return data;
        })
        .then( data => __setData(data) )
        .then( () => hero );
}

const remove = function (id) {
    return getAll()
        .then( data => data.filter(item => item.id != id) )
        .then( data => __setData(data) );
}

const resotereDefault = function () {
    const mock = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];
    return __setData(mock);
}

module.exports = {
    getAll,
    getById,
    find,
    update,
    add,
    remove,
    resotereDefault
}