$(document).ready(function(){
    $("button").click(function() {

        $("#d")[0].reset()
    });
    $("#free").click(function() {

        $("#check").toggle()
    });

});


let options =[
    "Thankyou for booking an appointment with us. We will get back to you shortly",
   
];
  function help (){
      document.getElementById("output").innerHTML =[options];
  }


    


