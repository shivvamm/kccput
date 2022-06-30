var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 100000,
  host : 'easylearning.guru',
  user :  'kcc_student',
  password : 'Kccitm.edu.in1',
  database : 'kccStudent'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post('/add',function(req, res){
  console.log("ADDITION");
  console.log(req.body);
  var o = "+";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var z = parseInt(req.body.c);
  var result =x+y+z;
  console.log(result);
  res.json(result);
  pool.getConnection(function (err,connection){
    connection.query("INSERT INTO RESULT (NUM1, NUM2 ,NUM3 , OP,  RES) VALUES ('"+x+"', '"+y+"', '"+z+"','"+o+"','"+result+"')",function(err,rows){
       connection.release();
       if(err) throw err;
       console.log(rows.length);
    });
 });  
});

router.post('/sub',function(req, res){
  console.log("SUBTRACTION");
  console.log(req.body);
  var o = "-";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var z = parseInt(req.body.c);
  var result =x-y-z;
  console.log(result);
  res.json(result);
});

router.post('/mul',function(req, res){
  console.log("MULTIPLICATION");
  console.log(req.body);
  var o = "*";
  var x = parseInt(req.body.a);
  var y =parseInt(req.body.b);
  var z = parseInt(req.body.c);
  var result =x*y*z;
  console.log(result);
  res.json(result);
  pool.getConnection(function (err,connection){
    connection.query("INSERT INTO RESULT (NUM1, NUM2 ,NUM3 , OP,  RES) VALUES ('"+x+"', '"+y+"', '"+z+"','"+o+"','"+result+"')",function(err,rows){
       connection.release();
       if(err) throw err;
       console.log(rows.length);
    });
 });  
});
