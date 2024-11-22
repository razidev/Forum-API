/* istanbul ignore file */
/* Komentar kode istanbul ignore file berfungsi untuk memberitahu Jest bahwa berkas ini 
(pool.js) tidak perlu diuji. Berkas ini akan diabaikan oleh jest dan tidak akan masuk ke 
dalam laporan coverage test */

const { Pool } = require('pg');
const config = require('../../../Commons/config');
 
const pool = new Pool(config.database);
 
module.exports = pool;