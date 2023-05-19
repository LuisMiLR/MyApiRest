// Configuration de la connexion à la base de données
const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USERs, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE 
  });
  
  db.connect((error) => { 
      if(error) {
          console.log(error)
      }else {
          console.log("MYSQL Connected...");
      }
  }) 


module.exports = db;