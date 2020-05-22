var express = require('express');
var router = express.Router();

/* GET going. */
router.get('/', function(req, res, next) {

/*
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
  res.send(`${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	  });
*/

});

module.exports = router;
