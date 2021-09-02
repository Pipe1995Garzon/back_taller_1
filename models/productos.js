const pool = require('../database');

module.exports = function() {
    async function listProduct() {
        let sql = "select * from productos";
        return await pool.query(sql);
    }

    return {
        listProduct
    }
}