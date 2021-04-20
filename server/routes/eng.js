const express = require('express');
const router = express.Router();
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

router.get('/', async (req, res) => {
    const dbPath = path.join(__dirname, '../db/vsession.db');
    let db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the chinook database.');
    });

    let sql = `SELECT * FROM tasks ORDER BY deadline asc`;

    const rows = await db_all(db, sql);

    db.close((err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Close the database connection.');
    });

    res.json(rows);
});

router.put('/task', async (req, res) => {
  const id = req.query.id;
  const completed = req.query.completed;
  
  const dbPath = path.join(__dirname, '../db/vsession.db');

  let db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
          console.error(err.message);
        }
        console.log('Connected to the chinook database.');
  });

  let data = [completed, id];

  const sql = `UPDATE tasks SET completed=? WHERE id=?`;

  db.run(sql, data, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
  
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });

  res.sendStatus(200);
});

async function db_all(db, query){
    return new Promise(function(resolve,reject){
        db.all(query, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}

module.exports = router;