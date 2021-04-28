$("#rejester").hide();
$("#login").hide();


const openlist = (e, btn) => {
  if (btn=== "rejester") {
    $("#rejester").show();
    $("#login").hide();
    
  } else if (btn === "login") {
    $("#rejester").hide();
    $("#login").show();
   
  }
} ;


