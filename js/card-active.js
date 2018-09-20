$(document).ready(function(){
    $(".card-p1").mouseover(function(){
        $(".card-p1").addClass("card-active");
        $(".card-p2").removeClass("card-active");
        $(".card-p3").removeClass("card-active");              
      });

    $(".card-p2").mouseover(function(){
        $(".card-p1").removeClass("card-active");
        $(".card-p2").addClass("card-active");
        $(".card-p3").removeClass("card-active");
    });

    $(".card-p3").mouseover(function(){
        $(".card-p1").removeClass("card-active");
        $(".card-p2").removeClass("card-active");
        $(".card-p3").addClass("card-active");       
    });

    $(".card-p1").mouseout(function(){
        	$(".card-p1").removeClass("card-active");
        	$(".card-p2").addClass("card-active");
        	$(".card-p3").removeClass("card-active");
        });
    $(".card-p3").mouseout(function(){
        	$(".card-p1").removeClass("card-active");
        	$(".card-p2").addClass("card-active");
        	$(".card-p3").removeClass("card-active");
        }); 
   
});