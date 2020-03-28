// var express = require('express');
// var app = express();
// const router = express.Router();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// const router = express.Router();
// var db = require('../models');


// module.exports = function(router){

// app.use(function (req, res, next) {
//     console.log("babies")
//     next()
// })


// router.get("/", (req, res) => {
//     res.status(200).json({
//         message: "kevin is a get jerk" 
//     })
// });


//second attempt at putting data from blog post into database. connection to blogs table is established but data not being sent in
// router.get("/add", (req, res) => {
//     const data = {
//         name: req.body.name,
//         category: req.body.category,
//         content: req.body.content
//     }
    
//     let { name, category, content} = data;

//     db.blog.create({
//         name,
//         category,
//         content
//     })
//         .then(db.blog => res.redirect('/blogs'))
//     })


//LOOK AT THIS IN THE MORNING FOR HOW TO DETERMINE WHAT INFO GETS POSTED INTO BLOGS
// db.blog.create("/createBlog", (req, res) => {
    // const blogPost = {
    //     name: req.body.name,
    //     category: req.body.category,
    //     content: req.body.content
    // }

//     res.send('POST request to the blog blogggg')
// });


// router.get("/:blogName", (req, res) => {
//     const id = req.params.blogName;
// if (id === 'special') {
//     res.status(200).json({
//         message: 'special!',
//         blogName: id
//     });
// } else {
//     res.status(200).json({
//         message: 'you passed an ID'
//     })
// }
    
// });
// };

// module.exports = router

// pretty sure i added code on the server.js page that allows use to
//  use the word app instead of app again but not for sure. pursue tomorrow.
//