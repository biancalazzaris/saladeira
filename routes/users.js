const express = require('express');
const router = express.Router();
const db = require('../models/db');
const userSchema = require('../models/userSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(db.findUsers());
});

function validationMid(req, res, next) {
  if(['POST', 'PUT'].indexOf(req.method) !== -1) {
    if(!req.body.name || !req.body.age){
      return res
        .status(422)
        .json({ error:'ERROR1: CAMPOS OBRIGATÓRIOS NÃO PODEM SER NULOS.'});
    }
  };
  const { error } = userSchema.validate(req.body);
    if(error) {
      return res.status(422).json({error: error.details});
    }else {
      next();
    }
}

// router.post('/:id', (req, res) => {
//   const user = db.insertUser(req.body);
//   res.status(201).json(user);
// })

router.post('/', validationMid, (req, res) => {
  const user = db.insertUser(req.body);
  res.status(201).json(user);
});

router.put('/:id', validationMid, (req, res) => {
  const id = req.params.id;
  db.updateUser(id, req.body);
  res.status(200).json();
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.deleteUser(id);
  res.status(200).json();
});

module.exports = router;
