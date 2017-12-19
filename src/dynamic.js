const dbconnection = require('../database/dbconnection');

const findMeme = (tag, cb) => {
  const sql = {
    text: `select url from memes where tags LIKE $1;`,
    values: [`%${tag}%`]
  };

  dbconnection.query(sql, (err, res) => {
    if (err) cb(err);


var urls = res.rows.map(function(val){
  return val.url
})

cb(null, JSON.stringify(urls));
  });
};

const addMeme = (info, cb) => {

  var url = JSON.parse(info)[0];
  var tag = JSON.parse(info)[1];
  const sql = {
    text: 'INSERT into memes (url, tags) values ($1, $2)',
    values: [url, tag]
  }
  dbconnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};


module.exports = {
  findMeme,
  addMeme
}
