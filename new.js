$("#task-list").hide();
$("#task-work").hide();
$("#task-others").hide();

const openlist = (button) => {
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


let element;

function addtask() {

  let value = $('#category1').val();
  if (value === "Personal") {
     element = `<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>`
    $("#personalPendeing").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>
    <button  id='personalcompleted'>Add to completed</button>
    `);
    $("#personalcompleted").click(addToCompleted)
    
   
  } else if (value === "Work") {
    $("#task-work").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>
    <button  id='workcompleted'>Add to completed</button>`
    );
    $("#workcompleted").click(addToCompleted2)

  }else if (value === "Others") {
    $("#task-others").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>  
    <button  id='otherscompleted'>Add to completed</button> `
    );
    $("#otherscompleted").click(addToCompleted3)
  }

}


function addToCompleted() {
  $("#personalCompleted").append(element);
}



function addToCompleted2() {
  $("#workCompleted").append(element);
}
function addToCompleted3() {
  $("#othersCompleted").append(element);
}
