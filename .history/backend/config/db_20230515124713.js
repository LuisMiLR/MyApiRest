// Configuration de la connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE 
  });
  
  db.connect( (error) => { 
      if(error) {
          console.log(error)
      }else {
          console.log("MYSQL Connected...");
      }
  }) 

  // Exemple de requête MySQL avec try-catch
const exampleQuery = () => {
    try {
      // Tentative de connexion à la base de données
      connection.connect();
  