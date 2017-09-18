var katzDeli = [];

var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

<<<<<<< HEAD
  katzDeliLine.push(`${name}`);

  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);

}

function nowServing(katzDeliLine) {

  var i = 0;

  while (i < katzDeliLine.length) {

    i++;

  }

if (katzDeliLine.length === 0) {

  return "There is nobody waiting to be served!";

} else return (`Currently serving ${katzDeliLine.shift()}.`)

}

var custLine = [];

function currentLine(katzDeliLine) {

  var i = 0;

  while (i < katzDeliLine.length) {

    custLine.push(` ` + [i + 1] + `. ` + katzDeliLine[i]);

    i++;

  }

  if (katzDeliLine.length == 0) {

    return "The line is currently empty."

  } else return (`The line is currently:` + custLine)

}
=======
  katzDeliLine.push(name);

  console.log('Welcome ${name} you are ' + katzDeliLine[i] + ' in line')

   
}
>>>>>>> 5d025b1b9d5e356e7dbff8d9aa67db1d07271fdd
