const xlsxj = require("xlsx-to-json");
// const xlsxFile = require('../files/poaloData.xlsx');

module.exports.fromXlsxToJson = () => {
    xlsxj({
        input: 'poaloData.xlsx',
        output: "output.json"
    }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            //console.log(result);
        }
    });
}

