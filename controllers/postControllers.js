const posts = require ('../data/posts');

const index = (req,res) => {
  let postTags = posts;

  if (req.query.tags) {
    postTags = posts.filter (post => post.tags.includes( req.query.tags));
  }
  res.json(postTags)
};

const show = (req,res) => {
  const post = posts.find(post => post.id == req.params.id)
  
  if(!post) {
    res.status(404);
    return res.json({
      message: 'post non trovato',
      status: 404,
      error: 'not found'
    })
  }
  res.json(post)
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
  const post = posts.find(post => post.id == req.params.id)

  if(!post){
    res.status(404)
    return res.json({
      message: 'post non trovato',
      status : '404',
      error : 'not found'
     })
   };
  
  posts.splice(posts.indexOf(post),1)
  res.sendStatus(204)
  console.log(posts)
};

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destory
};