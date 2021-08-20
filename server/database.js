// const { Client } = require('pg');

// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'qw12QW!@',
//     database: 'testing_db',
// });

// client.connect()

// client.on('connect', () => {
//     console.log('database connected')
// })

// client.on('end', () => {
//     console.log('session ended')
// })

// module.export = client;


// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'testing_db',
//   password: 'qw12QW!@',
//   port: 5432,
// })


// pool.connect()

// pool.on('connect', () => {
//     console.log('database connected')
// })


// module.export = pool;


const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
  host: 'localhost',
  database: 'vocabluary',
  password: 'qw12QW!@',
  port: 5432,
})


pool.connect()

pool.on('connect', () => {
    console.log('database connected')
})

module.exports = pool
