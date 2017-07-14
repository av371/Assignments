let a = document.getElementById("button1");
a.addEventListener("click", decodeSequence);

function decodeSequence() {

  let num = document.getElementById('decode').value.split('');

  let counter = 0;
  let initial = parseInt(num[0]);
  let array = [];
  let i;
  let new_num = 0;
  let check = 0;
  while (counter < num.length) {

    new_num = parseInt(decode(counter, initial));
	counter += initial + 1;
	initial = parseInt(num[counter]);
	array.push(new_num);
	check += new_num;
  }

  function decode(a, b) {
    var value = [];
	var val = 0;
	if (a + 1 + b <= num.length) {
	  for (i = a + 1; i < a + 1 + b; i++) {
	    value.push(parseInt(num[i]));
	  }
		val = value.join("");
		
	} else {

	  for (i = a + 1; i < num.length; i++) {
	    value.push(parseInt(num[i]));
	  }
		val = value.join("");
		console.log(val);
	}
	return val;
  }
	if (check % 2 === 0) {
    document.getElementById('result').innerHTML = "even";
  } else {
    document.getElementById('result').innerHTML = "odd";
  }
	
}