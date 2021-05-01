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
  } else if (button === "others") {
    $("#task-list").hide();
    $("#task-work").hide();
    $("#task-others").show();
  }
};

let personalCount = 0;
let workCount = 0;
let othersCount = 0;

function addtask() {
  let value = $("#category1").val();
  if (value === "Personal") {
    addNewData($("#Addtask").val(),$("#date").val())
    $("#personalPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>
    <button  id='personalcompleted${personalCount}'>Add to completed</button>
    `);

    $(`#personalcompleted${personalCount}`).click(addToCompleted);

    personalCount++;
  } else if (value === "Work") {
    addNewData($("#Addtask").val(),$("#date").val())
    $("#workPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>
    <button  class='workcompleted${workCount}'>Add to completed</button>`);
    $(`.workcompleted${workCount}`).click(addToCompleted2);

    workCount++;
  } else if (value === "Others") {
    addNewData($("#Addtask").val(),$("#date").val())
    $("#othersPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>  
    <button  class='otherscompleted${othersCount}'>Add to completed</button> `);
    $(`.otherscompleted${othersCount}`).click(addToCompleted3);
  }
  othersCount++;

  $("#Addtask").val("");
  $("#Addtask").focus();
}

function addToCompleted(e) {
  addNewData($("#Addtask").val(),$("#date").val())
  e.target.style.display = "none";
  $("#personalCompleted").append(e.target.previousElementSibling);
  $("#personalPendeing").remove(`#${e.target.previousElementSibling.id}`);
}

function addToCompleted2(e) {
  addNewData($("#Addtask").val(),$("#date").val())
  e.target.style.display = "none";
  $("#workCompleted").append(e.target.previousElementSibling);
  $("#workPendeing").remove(`#${e.target.previousElementSibling.id}`);
}

function addToCompleted3(e) {
  addNewData($("#Addtask").val(),$("#date").val())
  e.target.style.display = "none";
  $("#othersCompleted").append(e.target.previousElementSibling);
  $("#othersPendeing").remove(`#${e.target.previousElementSibling.id}`);
}

function cleartask() {
  $("#workCompleted").html("<h2>work completed</h2>");
  $("#personalCompleted").html(" <h2>personal completed</h2>");
  $("#othersCompleted").html("<h2> others completed</h2>");
}



let data = JSON.parse(localStorage.getItem("dataInfo")) || [];


// data.push({ key: "valueAddtask", value: "valuedate" });

// localStorage.setItem("dataInfo", JSON.stringify(data));

function addNewData (key, value) {
  console.log();
  data.push({ task: key, date: value });
  console.log(data);
  localStorage.setItem("dataInfo", JSON.stringify(data));
};

// localStorage.getItem(data);
