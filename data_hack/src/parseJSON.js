import fs from 'fs';

var getData = function() {
    var data = JSON.parse(fs.readFileSync('../data/timeline_bansal.txt', 'utf8'));
    console.log(data);
    return data;
}

export default getData;