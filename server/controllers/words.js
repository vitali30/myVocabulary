const pool = require('../database')

const addNewWord = (request, response) => {
  const gettingObject = JSON.parse(request.body.json);
  pool.query(
    `insert into words(word, translation, example, rating, learned) 
    values('${gettingObject.word}', '${gettingObject.translation}', '${gettingObject.example}', ${gettingObject.rating}, ${gettingObject.learned});`, 
    (error, result) => {
    if (error) {throw error}
    response.status(200).json('inserted')
  })
}

const getLastWord = (request, response) => {
  pool.query(`select * from words;`, (error, result) => {
    if (error) {throw error}
    response.status(200).json(results.rows)
  })
}

const getWordById = (request, response) => {
  const commentID = request.params.id;
  pool.query(`select * from words;`, (error, result) => {
    if (error) {throw error}
    response.status(200).json(results.rows)
  })
}

const getAllWords = (request, response) => {
  pool.query(`select * from words;`, (error, result) => {
    if (error) {throw error}
    response.status(200).json(result.rows)
  })
}

const getAllWordsByStatus = (request, response) => {
  pool.query(`select * from words;`, (error, result) => {
    if (error) {throw error}
    response.status(200).json(results.rows)
  })
}

const getAllWordsByRating = (request, response) => {
  pool.query(`select * from words;`, (error, result) => {
    if (error) {throw error}
    response.status(200).json(results.rows)
  })
}


const changeWord = (request, response) => {
  const gettingObject = JSON.parse(request.body.json);
  pool.query(
    `insert into words(word, translation, example, rating, learned) 
    values('${gettingObject.word}', '${gettingObject.translation}', '${gettingObject.example}', ${gettingObject.rating}, ${gettingObject.learned});`, 
    (error, result) => {
    if (error) {throw error}
    response.status(200).json('inserted')
  })
}

const updateWordRating = (request, response) => {
  const gettingObject = JSON.parse(request.body.json);
  pool.query(
    `insert into words(word, translation, example, rating, learned) 
    values('${gettingObject.word}', '${gettingObject.translation}', '${gettingObject.example}', ${gettingObject.rating}, ${gettingObject.learned});`, 
    (error, result) => {
    if (error) {throw error}
    response.status(200).json('inserted')
  })
}

const deleteOneWord = (request, response) => {
  const gettingObject = JSON.parse(request.body.json);
  pool.query(
    `insert into words(word, translation, example, rating, learned) 
    values('${gettingObject.word}', '${gettingObject.translation}', '${gettingObject.example}', ${gettingObject.rating}, ${gettingObject.learned});`, 
    (error, result) => {
    if (error) {throw error}
    response.status(200).json('inserted')
  })
}
  
  // const putRow = (request, response) => {
  //   pool.query(`insert into words(word, translation, example, rating, learned) values('new', 'новый', 'new world', 15, false);`, (error, result) => {
  //     if (error) {throw error}
  //     response.status(200).json('inserted')
  //   })
  // }

  
module.exports = {
  addNewWord,
  getLastWord,
  getWordById,
  getAllWords,
  getAllWordsByStatus,
  getAllWordsByRating,
  changeWord,
  updateWordRating,
  deleteOneWord
  }



// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

// module.exports.updateOneCommentCommentsArray = function(request, response) {
//     const commentID = request.params.id;
//     const addingCommentID = JSON.parse(request.body.json);

//     coll.coment.find({ _id: ObjectId(commentID) }, function (err, docs) {
//       const newArray = docs[0].comments;
//       newArray.push(addingCommentID)
//       coll.coment.updateOne({_id: ObjectId(commentID)}, {
//         $set: {comments: newArray}}, function(err, docs) {
//           if (err){ response.json(err) } 
//           else{ response.json("we added else one comment to array sucesfully") } 
//         })   
//     })
//   }

//   // callback
// client.query('SELECT NOW() as now', (err, res) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows[0])
//     }
//   })
//   // promise
//   client
//     .query('SELECT NOW() as now')
//     .then(res => console.log(res.rows[0]))
//     .catch(e => console.error(e.stack))