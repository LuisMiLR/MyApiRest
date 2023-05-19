Data Type

Pour ce projet, je suis en charge de la réalisation de la partie
serveur

implémenter une API et mettre en place une base de
données et tout le nécessaire pour qu'elle soit pleinement
fonctionnelle. en retournant les messages de renvoi de status

Pour ce projet, j'utilise NodeJs, ExpressJs, MySQL, PostMan.

Routes : 

Route n°1 : POST /users : Cette route permet d’ajouter un nouvel utilisateur.
Route n°2 : PUT /user/ : Cette route permet de mettre à jour un utilisateur. 
Route n°3 DELETE /user/ : Cette route permet de supprimer un utilisateur.
Route n°4 : GET /user/ : Cette route permet de récuperer les données d'un utilisateur.
Route n°5 : GET /users : Cette route permet de récuperer les informations de tous les utilisateurs de la base de données, sous forme de tableau Json d'objets user.
Route n°6 : POST /login : Cette route permet aux utilisateurs de se logger avec un mail et un
password.
Route n°7 : GET /me : Cette route permet de récupérer toutes les informations de la personne
connecté.

// utilisation du module jwt pour le côté sécurité ainsi que bcrypt pour haché le password :lock:

