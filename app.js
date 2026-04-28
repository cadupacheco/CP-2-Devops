const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'mysql-557323', 
  user: 'root',
  password: 'root',
  database: 'meubanco'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
  } else {
    console.log('Conectado ao MySQL 🚀');

    db.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100)
      )
    `);
  }
});

// CREATE
app.post('/usuarios', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO usuarios (nome) VALUES (?)', [nome], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ id: result.insertId, nome });
  });
});

// READ
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// UPDATE
app.put('/usuarios/:id', (req, res) => {
  const { nome } = req.body;
  db.query('UPDATE usuarios SET nome=? WHERE id=?', [nome, req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Atualizado');
  });
});

// DELETE
app.delete('/usuarios/:id', (req, res) => {
  db.query('DELETE FROM usuarios WHERE id=?', [req.params.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Deletado');
  });
});

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});