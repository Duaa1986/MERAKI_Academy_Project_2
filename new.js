$(".container").hide();
function login() {
  if ($("#username").val() === "admin" && $("#password").val() === "admin") {
      $(".container").show();
      $(".loginpage").hide();  
  } else {
    alert("You are not a valid user");
  }
}

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
let personaldata = JSON.parse(localStorage.getItem("personaldata")) || [];
let personalcompleted = JSON.parse(localStorage.getItem("personalcompleted")) || [];


addNewData(personaldata)

function addtask() {
  let value = $("#category1").val();
  if (value === "Personal") {
    $("#personalPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>
    <button  id='personalcompleted${personalCount}'>Add to completed</button>
    `);

    //local storage
    personaldata.push({ task: $("#Addtask").val(), date: $("#date").val() });

    localStorage.setItem("personaldata", JSON.stringify(personaldata));

    addNewData(personaldata);

    $(`#personalcompleted${personalCount}`).click(addToCompleted);

    personalCount++;
  } else if (value === "Work") {
    $("#workPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>
    <button  class='workcompleted${workCount}'>Add to completed</button>`);

    //local storage
    data.push({ task: $("#Addtask").val(), date: $("#date").val() });

    localStorage.setItem("dataInfo", JSON.stringify(data));

    addNewData(data);

    $(`.workcompleted${workCount}`).click(addToCompleted2);

    workCount++;
  } else if (value === "Others") {
    $("#othersPendeing").append(`<div>
    <p> ${$("#Addtask").val()} </p>
    <p> ${$("#date").val()} </p>
    </div>  
    <button  class='otherscompleted${othersCount}'>Add to completed</button> `);
    //local storage
    data.push({ task: $("#Addtask").val(), date: $("#date").val() });

    localStorage.setItem("othersInfo", JSON.stringify(data));

    addNewData(data);
    $(`.otherscompleted${othersCount}`).click(addToCompleted3);
  }
  othersCount++;

  $("#Addtask").val("");
  $("#Addtask").focus();
}

function addToCompleted(e) {
  console.log(e.target.previousElementSibling.firstChild.nextSibling.textContent);
  console.log(e.target.previousElementSibling.lastChild.previousSibling.textConten);

  personalcompleted.push({
    task: e.target.previousElementSibling.firstChild.nextSibling.textContent,
    date: e.target.previousElementSibling.lastChild.previousSibling.textContent,
  });
  localStorage.setItem("personalcompleted", JSON.stringify(personalcompleted));


  e.target.style.display = "none";
  $("#personalCompleted").html("<h2>personal completed</h2>");



  personalcompleted.forEach(dataInfo => {
     $("#personalCompleted").append(`<div>
     <p> ${dataInfo.task} </p>
     <p> ${dataInfo.data} </p>
     </div>  `);  
  })


  $("#workPendeing").remove(`#${e.target.previousElementSibling.id}`);

  // localStorage.setItem("personaldata", JSON.stringify(personaldata));

  // addNewData(personaldata)


 
}

function addToCompleted2(e) {
 
  e.target.style.display = "none";
  $("#workCompleted").append(e.target.previousElementSibling);
  $("#workPendeing").remove(`#${e.target.previousElementSibling.id}`);
}

function addToCompleted3(e) {
 
  e.target.style.display = "none";
  $("#othersCompleted").append(e.target.previousElementSibling);
  $("#othersPendeing").remove(`#${e.target.previousElementSibling.id}`);
}

function cleartask() {
  $("#workCompleted").html("<h2>work completed</h2>");
  $("#personalCompleted").html(" <h2>personal completed</h2>");
  $("#othersCompleted").html("<h2> others completed</h2>");
}


function addNewData(data) {
  $("#personalPendeing").html("<h2>*P*pending</h2>");
  data.forEach(function (dataInfo) {
    $("#personalPendeing").append(`<div>
  <p> ${dataInfo.task} </p>
  <p> ${dataInfo.date} </p>
  </div>
  <button  id='personalcompleted${personalCount}'>Add to completed</button>
  `);
    $(`#personalcompleted${personalCount}`).click(addToCompleted);
  });
}

// if (data.length) {
//   data.forEach(function (dataInfo) {
//     $("#personalPendeing").append(`<div>
//     <p> ${dataInfo.task} </p>
//     <p> ${dataInfo.date} </p>
//     </div>
//     <button  id='personalcompleted${personalCount}'>Add to completed</button>
//     `);
//     $(`#personalcompleted${personalCount}`).click(addToCompleted);
//     personalCount++;
//   });
// }

// function addNewData(data) {
//   $("#workPendeing").html("");

//   data.forEach(function (dataInfo) {
//     $("#workPendeing").append(`<div>
//     <p> ${dataInfo.task} </p>
//     <p> ${dataInfo.date} </p>
//     </div>
//     <button  id='workcompleted${workCount}'>Add to completed</button>
//     `);
//     $(`#workcompleted${workCount}`).click(addToCompleted);
//   });
// }

// if (data.length) {
//   data.forEach(function (dataInfo) {
//     $("#workPendeing").append(`<div>
//       <p> ${dataInfo.task} </p>
//       <p> ${dataInfo.date} </p>
//       </div>
//       <button  id='workcompleted${workCount}'>Add to completed</button>
//       `);
//     $(`#workcompleted${workCount}`).click(addToCompleted);
//     workCount++;
//   });
// }
// function addNewData(data) {
//   $("#othersPendeing").html("");

//   data.forEach(function (dataInfo) {
//     $("#othersPendeing").append(`<div>
//       <p> ${dataInfo.task} </p>
//       <p> ${dataInfo.date} </p>
//       </div>
//       <button  id='otherscompleted${othersCount}'>Add to completed</button>
//       `);
//     $(`#otherscompleted${othersCount}`).click(addToCompleted);
//   });
// }

// if (data.length) {
//   data.forEach(function (dataInfo) {
//     $("#othersPendeing").append(`<div>
//         <p> ${dataInfo.task} </p>
//         <p> ${dataInfo.date} </p>
//         </div>
//         <button  id='otherscompleted${othersCount}'>Add to completed</button>
//         `);
//     $(`#otherscompleted${othersCount}`).click(addToCompleted);
//     othersCount++;
//   });
// }
