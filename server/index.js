var nodeDrpc = require('node-drpc');

//Note : timeout is optional
var nodeDrpcClient =  new  nodeDrpc( "52.29.96.146", 3772);

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter something to get it exclaimed > ');
rl.prompt();
rl.on('line', function(line) {
  nodeDrpcClient.execute( "words", line, function(err, response) {
  	if (err) {
      console.error(err);
	  rl.close();
  	} else {
      console.log("\tRemote Storm server says: \"" + JSON.parse(response)[1][0] + "\"");
      rl.prompt();
  	}
  });
}).on('close',function(){
    process.exit(0);
});
