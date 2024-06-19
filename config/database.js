import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

let pool = mysql.createPool({
	connectionLimit: 10000,
	host: process.env.DATABASE_HOST, 
	user: process.env.DATABASE_USER, 
	password: process.env.DATABASE_PASSWORD, 
	database: process.env.DATABASE_BASE
});


console.log('Database Host:', process.env.DATABASE_HOST);
console.log('Database User:', process.env.DATABASE_USER);
console.log('Database Password:', process.env.DATABASE_PASSWORD);
console.log('Database Name:', process.env.DATABASE_BASE);

// Connexion à la base de données
pool.getConnection((err, connection) => {
	console.log("Trying connexion database");
	if (err) {
		console.error('Error connecting to the database:', err);
    return;
	} else {
		console.log("Connected to the database");
  		connection.release(); // Liberar a conexão após a utilização
	}
	
});

export default pool;