// Creation of pool of Postgresql to manage many request at the same time 
const { Pool } = require('pg');

const pool = new Pool({ 
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Pool is in charge of connexions

module.exports = pool;