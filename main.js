$("#rejester").hide();
$("#login").hide();


const openlist = (e, button) => {
  if (button === "rejester") {
    $("#rejester").show();
    $("#login").hide();
    
  } else if (button === "login") {
    $("#rejester").hide();
    $("#login").show();
   
  }
} ;


