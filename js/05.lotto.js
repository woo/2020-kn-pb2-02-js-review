/* var nums = {'A', 'B', 'C', 'D', 'E', 'F'};
console.log{ nums.indexOf('G') };
 */
function onFinder(){
	$(".lotto-wrap").empty();
	var html, className;
	var numbers = [];
	var selectedNumbers = [];
	for(var i=1; i<=45; i++) numbers.push(i);
	numbers = _.shuffle(numbers);
	for(var i=0; i<6; i++) selectedNumbers.push(numbers.pop());
	selectedNumbers = selectedNumbers.sort(function( a, b){return a - b;});
	for(var i in selectedNumbers){
		if(selectedNumbers[i] < 11) className = 'yellow';
		else if(selectedNumbers[i] >= 11 && selectedNumbers[i] < 21 className = 'cyan');
		else if(selectedNumbers[i] >= 21 && selectedNumbers[i] < 31 className = 'red');
		else if(selectedNumbers[i] >= 31 && selectedNumbers[i] < 41 className = 'grey');
		else className = 'green');
		html = '<div class="lotto '+className+'">'+selectedNumbers[i]+'</div>';
		$(".lotto-wrap").append(html);
	}
}



$("#btFinder").click(onFinder);