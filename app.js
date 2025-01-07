const express = require ('express');
const postRouter = require ('./router/posts')
const app = express();
const port = 3000

app.get('/', (req,res) => {
  res.send('il server dei post')
})

app.use('/posts', postRouter);

app.listen(port, () => {
  console.log('resto in ascolto alla porta 3000')
})