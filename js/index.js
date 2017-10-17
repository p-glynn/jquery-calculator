$(document).ready(function () {

  var inputArr = [];
  var inputInt = "";
  var LSO = "";
  var RSO = "";
  var result = 0;
  var recentOp;
  console.log(inputArr);

  var screen = $('#screen');

  $('#zero').click(function(event) {
    inputArr.push(0);
    $("#screen").append("0");
    console.log(inputArr);
  });
  $('#one').click(function(event) {
    inputArr.push(1);
    $("#screen").append("1");
    console.log(inputArr);
  });
  $('#two').click(function(event) {
    inputArr.push(2);
    $("#screen").append("2");
    console.log(inputArr);
  });
  $('#three').click(function(event) {
    inputArr.push(3);
    $("#screen").append("3");
    console.log(inputArr);
  });
  $('#four').click(function(event) {
    inputArr.push(4);
    $("#screen").append("4");
    console.log(inputArr);
  });
  $('#five').click(function(event) {
    inputArr.push(5);
    $("#screen").append("5");
    console.log(inputArr);
  });
  $('#six').click(function(event) {
    inputArr.push(6);
    $("#screen").append("6");
    console.log(inputArr);
  });
  $('#seven').click(function(event) {
    inputArr.push(7);
    $("#screen").append("7");
    console.log(inputArr);
  });
  $('#eight').click(function(event) {
    inputArr.push(8);
    $("#screen").append("8");
    console.log(inputArr);
  });
  $('#nine').click(function(event) {
    inputArr.push(9);
    $("#screen").append("9");
    console.log(inputArr);
  });

  // ABOVE : BORING EVENT HANDLERS ()

  // BELOW : MORE INTERESTING STUFF

  $('#equals').click(function(event) {
    console.log(inputArr);
    if (recentOp === '+') {
      for (let i of inputArr) {
        RSO += i;
      }
      parseInt(RSO);
      result = parseInt(LSO) + parseInt(RSO);
      console.log(result);
      $('#screen').text(`${result}`);
      inputArr = [];
    }
    if (recentOp === '-') {
      for (let i of inputArr) {
        RSO += i;
      }
      parseInt(RSO);
      result = parseInt(LSO) - parseInt(RSO);
      console.log(result);
      $('#screen').text(`${result}`);
      inputArr = [];
    }
    if (recentOp === '*') {
      for (let i of inputArr) {
        RSO += i;
      }
      parseInt(RSO);
      result = parseInt(LSO) * parseInt(RSO);
      console.log(result);
      $('#screen').text(`${result}`);
      inputArr = [];
    }
    if (recentOp === '/') {
      for (let i of inputArr) {
        RSO += i;
      }
      parseInt(RSO);
      result = parseInt(LSO) / parseInt(RSO);
      console.log(result);
      $('#screen').text(`${result}`);
      inputArr = [];
    }


  });
  $('#plus').click(function (event) {
    $("#screen").text('');
    console.log(inputArr);
    for (let i of inputArr) {
      LSO += i;
    }
    parseInt(LSO);
    result += LSO;
    console.log(LSO);
    recentOp = '+';
    inputArr = [];
  })
  $('#minus').click(function (event) {
    $("#screen").text(' ');
    console.log(inputArr);
    for (let i of inputArr) {
      LSO += i;
    }
    parseInt(LSO);
    result += LSO;
    console.log(LSO);
    recentOp = '-';
    inputArr = [];
  })
  $('#multiply').click(function (event) {
    $("#screen").text(' ');
    console.log(inputArr);
    for (let i of inputArr) {
      LSO += i;
    }
    parseInt(LSO);
    result += LSO;
    console.log(LSO);
    recentOp = '*';
    inputArr = [];
  })
  $('#divide').click(function (event) {
    $("#screen").text(' ');
    console.log(inputArr);
    for (let i of inputArr) {
      LSO += i;
    }
    parseInt(LSO);
    result += LSO;
    console.log(LSO);
    recentOp = '/';
    inputArr = [];
  })
  $('#clear').click(function(event) {
    LSO = "";
    console.log("LSO>>>", LSO);
    RSO = "";
    console.log("RSO", RSO);
    result = 0;
    console.log("result >>", result);
    recentOp;
    inputArr = [];
    console.log(inputArr);
    $("#screen").text('');
  });
});
