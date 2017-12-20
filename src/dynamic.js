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

const loginMemer = (information, cb) => {
  const username = JSON.parse(information)[0];
  const password = JSON.parse(information)[1];
  const sql = {
    text: 'SELECT password FROM users WHERE name = $1',
    values: [username]
  }
  dbconnection.query(sql, (err,res1)=>{
    if(err) cb(err);
    else if(res1.rows != []){
      const sql2 = {
        text: 'SELECT password FROM users WHERE name = $1',
        values: [username]
      }
      dbconnection.query(sql2, (err,res2)=>{
        if(err) cb(err);
        cb(null, res2.rows);
      });


    }
    else if (res1.rows == []){
      cb(null, ["error"])

    }
  })

};

module.exports = {
  findMeme,
  addMeme,
  loginMemer
}
