
// to do list page 
$("#app").hide();
$("#app1").hide();
$("#app2").hide();

const openlist = (e, button) => {
  if (button === "Personal") {
    $("#app2").show();
    $("#app1").hide();
    $("#app").hide();
  } else if (button === "work") {
    $("#app2").hide();
    $("#app1").show();
    $("#app").hide();
  }else if (button === "others") {
  $("#app2").hide();
  $("#app1").hide();
  $("#app").show();
};
} ;

