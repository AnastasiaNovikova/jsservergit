var exec = require("child_process").exec;

function start(response, postData) {
	console.log("request hendler START was called.");

	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    '<meta name="verify-admitad" content="fe02dbed5a" />'
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
 
}

function upload(response, postData) {
  	console.log("Request handler 'upload' was called.");
  	response.writeHead(200, {"Content-Type": "text/plain"});
  	response.write("You've sent: " + postData);
  	response.end();
}

function mypage(response, postData) {
  console.log("Request handler 'mypage' was called.");

  var body1 = '<!-- index.html -->'+
      '<!DOCTYPE html>'+
      '<html>'+
        '<head>'+
          '<meta charset="utf-8" />'+
          '<title>React Tutorial</title>'+
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js"></script>'+
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js"></script>'+
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>'+
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>'+
          '<script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.6.2/remarkable.min.js"></script>'+
        '</head>'+
        '<body>'+
          '<div id="content"></div>'+
          '<script type="text/babel" src="scripts/example.js"></script>'+
          '<script type="text/babel">'+
            '// To get started with this tutorial running your own code, simply remove'+
            '// the script tag loading scripts/example.js and start writing code here.'+
          '</script>'+
        '</body>'+
      '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body1);
    response.end();
 
}

exports.start = start;
exports.upload = upload;
exports.mypage = mypage;