const fs = require('fs');

//function to read JSON files and return a pasred json file 

const readFile = (path)=>{
    const readFile = fs.readFileSync(path);
    return JSON.parse(readFile);
}

module.exports = {
    readFile
}
