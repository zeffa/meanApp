const express = require('express');
const axios = require('axios');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const localDB = 'mongodb://127.0.0.1:27017/fob254';
// mongoose promise
mongoose.connect(process.env.MONGODB_URI || localDB)
.then(database => console.log(`connected to database`))
.catch(error => console.log(error));

const router = express.Router();
const API = 'https://jsonplaceholder.typicode.com';
const home = require('./home');

//models
const Element = require('../models/element')
const Category = require('../models/category')

/* GET api listing. */
router.get('/elements', (req, res) => {
  Element.find({}).populate('category').exec()
  .then(elements => {
    res.status(200).json(elements)
  })
  .catch(error => {
    console.log(error)
  })
});

router.use('/home', home)

/*get all posts*/
router.get('/posts', (req, res)=>{
	axios.get(`${API}/posts`)
	.then((posts) => {
		// res.status(200).json(posts.data);
		res.json(posts.data);
	})
	.catch((error) => {
		res.status(500).send(error);
	})
})
/*get all posts*/
router.get('/users', (req, res)=>{
	axios.get(`${API}/users`)
	.then(users => {
		// res.status(200).json(posts.data);
		res.json(users.data);
    // console.log(req.headers);
	})
	.catch(error => {
		res.status(500).send(error);
	})
})

//login url
router.get('/login', (req, res)=>{
  var username = req.query.username
  var email = req.query.email
  var mUser = {}
  console.log(req.query);
  axios.get(`${API}/users`)
  .then(users => {
    for (var i = 0; i < users.data.length; i++) {
      if(users.data[i].username == username && users.data[i].email == email){
        console.log(users.data[i])
        mUser = users.data[i]
      }
    }
      res.json(mUser)
  })
  .catch(error=>{
    res.status(500).send(error)
  })
})

module.exports = router;
