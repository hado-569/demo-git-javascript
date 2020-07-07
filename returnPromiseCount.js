var fs= require('fs');

function countFrom(a,b){
	return new Promise(function(resolve,reject){
		var setIntervalID= setInterval(function(err,data){
			if(err){
				reject(err);
			}else if(a===b) {
				clearInterval(setInterval);
				resolve(data);
			}
			else{
				++a;
				console.log(a);
				
			}
			

		},1000);
	});	
};

typeof countFrom(0,10).then(function(){
	console.log('done');
});