
// to do list page 
$("#task-list").hide();
$("#task-work").hide();
$("#task-others").hide();

const openlist = (e, button) => {
  if (button === "Personal") {
    $("#task-list").show();
    $("#task-work").hide();
    $("#task-others").hide();
  } else if (button === "work") {
    $("#task-list").hide();
    $("#task-work").show();
    $("#task-others").hide();
  }else if (button === "others") {
  $("#task-list").hide();
  $("#task-work").hide();
  $("#task-others").show();
};
} ;

