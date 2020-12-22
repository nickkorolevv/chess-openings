const eco = require('./eco.json');
module.exports = {
    getOpeningsByCode,
    getOpeningsBySubstring,
    getList,
    getByFen,
}

function getOpeningsByCode(code) {
    return eco.filter(el => el.eco === code);
}
function getOpeningsBySubstring(substring) {
    return eco.filter(el => el.name.indexOf(substring) !== -1);
}
function getList(limit, offset) {
    if (!offset) offset = 0;
    if (!limit) return eco;
    return eco.slice(offset, offset + limit);
}
function getByFen(fen) {
    return eco.find(x => x.fen === fen);
}
