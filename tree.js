const fs = require('fs')
const path = require('path')


var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results );
        }
      });
    });
  });
};


walk('/home/tu/Desktop/demo-tree/abc/', function(err, results) {
  if (err) throw err;
  console.log(results);
});

var list_file_to_delete = ["/images/a1.jpg", "/images/a2.jpg", "/images/a3.jpg"]
fs.unlink(home/tu/Desktop/demo-tree/abc/ , function(err) {console.log("success")})