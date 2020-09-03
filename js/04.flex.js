/* $(".food-wrap").find(".food").click(onFoodClick);
function onFoodClick(){
	$(".food-wrap").find(".food").css("order",2);
	$(this).css("order",1);
} 


var mr = $(this).css("margin");  // Getter
$(this).css("order",order);      //Setter
$(this).css({"order":order, "color" : "red"}); // 다중 Setter
*/

// 0 ~ 7 까지의 랜덤값을 추출
// Math.ceil(Math.random() * 8) - 1
$("#btReset").click(function(){
	$(".food").each(function(i){
		var order = Math.ceil(Math.random() * 8) - 1;
		$(this).css({"order":order});
});
});