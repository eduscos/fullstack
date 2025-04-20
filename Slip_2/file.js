const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first file name: ", function(file1) {
  rl.question("Enter second file name: ", function(file2) {
    fs.readFile(file1, 'utf8', function(err, data) {
      if (err) {
        console.log("Error reading first file:", err.message);
        rl.close();
        return;
      }

      fs.appendFile(file2, data, function(err) {
        if (err) {
          console.log("Error appending to second file:", err.message);
        } else {
          console.log(`Content of "${file1}" appended to "${file2}" successfully.`);
        }
        rl.close();
      });
    });
  });
});
