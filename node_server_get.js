/**
 * Created by hunter on 2017/6/4.
 */

var http = require('http');
var url = require('url');
var util = require('util');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);