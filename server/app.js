// Dependencies
require('mysql-import').config({
  host      : 'localhost',
  user      : 'vedant',
  password  : 'pass123',
  database  : 'tshirtshop'
}).import('./assets/database/tshirtshop.sql').then(() => {
  console.log('Database initialized')
})