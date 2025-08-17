import pool from "../db/db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  const { nombre, apellido, direccion, edad } = req.body;
  if (!nombre || !apellido || !direccion || edad == null) {
    return res.status(400).json({ error: "Campos incompletos" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO users (nombre, apellido, direccion, edad) VALUES (?, ?, ?, ?)",
      [nombre, apellido, direccion, edad]
    );
    res
      .status(201)
      .json({ id: result.insertId, nombre, apellido, direccion, edad });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { nombre, apellido, direccion, edad } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE users SET nombre = ?, apellido = ?, direccion = ?, edad = ? WHERE id = ?",
      [nombre, apellido, direccion, edad, req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ id: req.params.id, nombre, apellido, direccion, edad });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.json({ message: "Usuario eliminado con éxito" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
