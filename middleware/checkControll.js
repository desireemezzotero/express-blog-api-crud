function checkControll(req,res,next) {
  const {title, image} = req.body

  if (title == undefined && image == undefined) {
    res.send(`Inserisci il titolo e l'immagine`)
  } else {
    next()
  }
}

module.exports = checkControll;