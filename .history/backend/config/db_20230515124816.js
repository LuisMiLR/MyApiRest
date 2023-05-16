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
  
      // Exécution de la requête
      connection.query('SELECT * FROM ma_table', (error, results) => {
        if (error) {
          throw error; // Lève une erreur pour être attrapée par le bloc catch
        }
  
        // Traitement des résultats
        console.log(results);
      });
    } catch (error) {
      console.error('Une erreur s\'est produite :', error);
    } finally {
      // Fermeture de la connexion à la base de données
      connection.end();
    }
  };
  
  // Appel de la fonction de requête
  exampleQuery();