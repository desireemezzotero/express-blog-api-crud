const posts = require ('../data/posts');


const index = (req,res) => {
  res.send('restituisce la lista dei post')
};

const show = (req,res) => {
  res.send(`restituisce il partecipante richiesto con id` + req.params.id)
};

const store = (req,res) => {
  res.send ('aggiunge un nuovo post')
}

const update = (req, res) => {
  res.send(`modica il post con id` + req.params.id)
}

const modify = (req, res) => {
  res.send ('modifico parzialmente un post' + req.params.id)
};

const destory = (req, res) => {
  res.send('elimina il post con id' + req.params.id)
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destory
};