/* jshint esversion:6 */
var express = require('express');
var app = express();

app.use(express.static('static'));

var server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on ${server.address().port}`);
});
