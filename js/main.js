$(document).ready(function() {
    $(".kal_cont").each(function(i){ 
        $(this).mousemove(function(e) {
            $(this).find(".ksc").each(function(i){ 
                $(this).css({backgroundPosition: e.pageX+"px "+e.pageY+"px"});
            });
        });
    });

	var index = 0;
	var imgArr = ['url("khaled.jpg")', 'url("khaled_red.jpg")', 'url("khaled3.jpg")', 'url("khaled4.jpg")', 'url("khaled5.jpg")', 'url("khaled6.jpg")', 'url("khaled7.jpg")', 'url("khaled8.jpg")', 'url("khaled9.jpg")', 'url("khaled10.jpg")'];
    //load new image on button click
   $(".another_one").click(function(e){
   	console.log(index);
    	index++;
    	index = index % imgArr.length;
    	imgArr.url = imgArr[index];
    	$('.ksc').css("background-image", imgArr.url);
    })

    // $('.another_one').click(function(e){
    // 	
    // 	for (i = 0; i < imgArr.length; i++){
    // 		$('.ksc').css("background-image", imgArr[i]);
    // 	}

    // 	e.preventDefault();
    // });
});