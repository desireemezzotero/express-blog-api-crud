const express = require ('express');
const postRouter = require ('./router/posts')
const notFound = require('./middleware/notFound')
const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req,res) => {
  res.send('il server dei post')
});

app.use('/posts', postRouter);

app.use(notFound)

app.listen(port, () => {
  console.log('resto in ascolto alla porta 3000')
});