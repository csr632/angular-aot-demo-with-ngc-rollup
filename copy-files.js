var fs = require('fs');
var resources = [
  'src/index.html',
  'src/styles.css'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = 'serve/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});