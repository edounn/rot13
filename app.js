function rot(str){
	var input = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?!';
	var output =' NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm!?';
	var trans = '';
	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < input.length; j++){
			if(str[i] === input[j]){
				trans += output[j];
			}
		}
	}
	return trans
}

//testing
function assertEqual(actual, expected, testName) {
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

