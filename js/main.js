$(document).ready(function() {
    $(".kal_cont").each(function(i){ 
        $(this).mousemove(function(e) {
            $(this).find(".ksc").each(function(i){ 
                $(this).css({backgroundPosition: e.pageX+"px "+e.pageY+"px"});
            });
        });
    });

	var index = 0;
	var imgArr = ['url("/images/khaled.jpg")', 'url("images/khaled_red.jpg")', 'url("images/khaled3.jpg")', 'url("images/khaled4.jpg")', 'url("images/khaled5.jpg")', 'url("images/khaled6.jpg")', 'url("images/khaled7.jpg")', 'url("images/khaled8.jpg")', 'url("images/khaled9.jpg")', 'url("images/khaled10.jpg")', 'url("images/khaled11.jpg")'];
    //load new image on button click
   $(".another_one").click(function(e){
    	index++;
    	index = index % imgArr.length;
    	imgArr.url = imgArr[index];
    	$('.ksc').css("background-image", imgArr.url);
    })

});