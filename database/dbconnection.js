const {Pool} = require('pg');

let dbUrl;

require('env2')('./config.env');

if(!process.env.DATABASE_URL) throw new Error ('DB_URL is not set');
dbUrl = process.env.DATABASE_URL;
const pool = new Pool({connectionString: dbUrl, ssl: true})
module.exports = pool
