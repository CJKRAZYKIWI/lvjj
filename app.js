const express = require('express');
const app = express();

const { authJwt } = require("./middleware");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

const Review = db.review;
const User = db.user;

app.get('/api/reviews', [authJwt.verifyToken], (req, res) => {
  Review.findAll({
    attributes: { exclude: ['userId'] },
    include: [
      { 
        model: User,
        attributes: [ 'id', 'username' ]
      }
    ]
  }).then(reviews => {
      if (!reviews) {
        return res.status(404).send({ error: "User Not found." });
      }
      res.status(200).send(reviews)
    })
    .catch(err => {
      res.status(500).send({ error: err.message });
    });
})

app.post('/api/reviews', [authJwt.verifyToken], (req, res) => {
  Review.create({
    review: req.body.review,
    rating: req.body.rating,
    userId: req.body.userId
  })
  .then(review => {
    res.status(201).send();
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;