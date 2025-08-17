import mysql from "mysql2/promise"; // nota el /promise
import dotenv from "dotenv";

dotenv.config();

// Usar DATABASE_URL para producción (como en Railway) y variables individuales para desarrollo local
const connectionConfig = process.env.DATABASE_URL
  ? { uri: process.env.DATABASE_URL }
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    };

const pool = mysql.createPool({
  ...connectionConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Verificar conexión
async function testConnection() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Conectado a MySQL en la base de datos 'usuarios'");
  } catch (err) {
    console.error("❌ Error conectando a la base de datos:", err);
  }
}

testConnection();

export default pool;
