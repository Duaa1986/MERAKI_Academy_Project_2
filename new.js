
// to do list page 
$("#task-personal").hide();
$("#task-work").hide();
$("#task-others").hide();

const openlist = (e, button) => {
  if (button === "Personal") {
    $("#task-personal").show();
    $("#task-work").hide();
    $("#task-others").hide();
  } else if (button === "work") {
    $("#task-personal").hide();
    $("#task-work").show();
    $("#task-others").hide();
  }else if (button === "others") {
  $("#task-personal").hide();
  $("#task-work").hide();
  $("#task-others").show();
};
} ;

