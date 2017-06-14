function rot(str){
  var rotObj = {};
	var input = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?!';
	var output =' NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!?';
	var trans = '';
	var outputArr = output.split('');
	var inputArr = input.split('');
	
	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < input.length; j++){
			if(str[i] === input[j]){
				trans += output[j];
			}
		}
	}
	rotObj.string = trans;
	// return rotObj;
	 return trans
}

//rot('Jul qvq gur puvpxra pebff gur ebnq!'); //V unir n qbt anzrq ylphf
//rot('URYYB ') // HELLO
//rot('Why did the chicken cross the road? Gb trg gb gur bgure fvqr!');  //Jul qvq gur puvpxra pebff gur ebnq? To get to the other side!


function assertEqual(actual, expected, testName) {
  // your code here
  if( actual === expected){
    console.log('PASS [ ' + testName + ' ] expected, "' + expected + '" AND DID get " '+ actual + ' " \n');
  }else{
    console.log('FAIL [ ' + testName + ' ] expected, "' + expected + '" BUT DID NOT get " '+ actual + ' "\n ');
  }
}




// Calls to 'assertEqual':
assertEqual(rot('Jul qvq gur puvpxra pebff gur ebnq?'), 'Why did the chicken cross the road?', 'Failed chicken joke');  //fail ? != ?
assertEqual(rot('Jul qvq gur puvpxra pebff gur ebnq!'),'Why did the chicken cross the road?','Passed chicken joke'); // pass ? to !
assertEqual(rot('Gb trg gb gur bgure fvqr?'), 'To get to the other side!', 'pass: chicken joke answer');

