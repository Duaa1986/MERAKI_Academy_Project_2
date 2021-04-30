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


let personalCount =0

function addtask() {
  


  let value = $('#category1').val();
  if (value === "Personal") {
    
    $("#personalPendeing").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>
    <button  id='personalcompleted${personalCount}'>Add to completed</button>
    `);


    $(`#personalcompleted${personalCount}`).click(addToCompleted)


    personalCount++;
    
   
  } else if (value === "Work") {
    $("#workPendeing").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>
    <button  class='workcompleted${workcount}'>Add to completed</button>`
    );
    $(".workcompleted").click(addToCompleted2)

    workcount++;

  }else if (value === "Others") {
    $("#othersPendeing").append(`<div>
    <p> ${$('#Addtask').val()} </p>
    <p> ${$('#date').val()} </p>
    </div>  
    <button  class='otherscompleted${otherscount}'>Add to completed</button> `
    );
    $(".otherscompleted").click(addToCompleted3)
  }
otherscount++;

  $('#Addtask').val("")
  $('#Addtask').focus()

}


function addToCompleted(e) {
  e.target.style.display = "none";
  $('#personalCompleted').append(e.target.previousElementSibling)
  $('#personalPendeing').remove(`#${e.target.previousElementSibling.id}`)
  
  }
 

function addToCompleted2() {
  e.target.style.display = "none";
  $('#workCompleted').append(e.target.previousElementSibling)
  $('#workPendeing').remove(`#${e.target.previousElementSibling.id}`)
}
function addToCompleted3() {
  
}


function cleartask() {
  $("#workCompleted").html('<h2>work completed</h2>')
  $('#personalCompleted').html(' <h2>personal completed</h2>')
  $('#othersCompleted').html('<h2> others completed</h2>')


}

//let array =[{name: valuetask ,date : valuedate}];
//array.push({name:valuetask,date: valuedate });


