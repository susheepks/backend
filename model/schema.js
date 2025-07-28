const mongoose = require('mongoose');
const detailschema = new mongoose.Schema(
    {
        name:{type:"String"}
    });
module.exports = mongoose.model('schema',detailschema)
