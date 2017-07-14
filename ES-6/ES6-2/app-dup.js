import { folder, file } from './class.js';
import $ from 'jquery'

const hash = [];
let currentFolder = "root";
const array = [];
const names = [];
names.push("root");
const dot = ".";
currentStatus();
const a = document.getElementById("button1");
a.addEventListener("click", check);
array["root"] = new folder("root", "ssss", "root/");
$("div").click(function (evt) {
  const clicked = evt.target;
  if (!clicked.innerHTML.includes(dot)) {
    currentFolder = clicked.innerHTML;
    document.getElementById('root').innerHTML = array[currentFolder].showContents();
    currentStatus();
  } else {
    document.getElementById("errors").innerHTML = "It's a file bro";
  }
});

function check() {
  const name = document.getElementById('decode').value;
  if (name.includes(dot)) {
    const fileName = name.split(".");
    if (fileName.length > 2) {
      document.getElementById("errors").innerHTML = "Enter File name in (name).(extension) format";
    } else {
      if (validateProp1(fileName[0]) && validateProp1(fileName[1])) {
        if (hash[currentFolder] === undefined) {
          hash[currentFolder] = [];
          hash[currentFolder].push(name);
          names.push(name);
          const path = '${array[currentFolder].showPath()}, ${name},/';
          array[name] = new file(fileName[0], currentFolder, fileName[1], path);
          document.getElementById('root').innerHTML = array[currentFolder].showContents();
        } else {
          if (hash[currentFolder].indexOf(name) === -1) {
            hash[currentFolder].push(name);
            names.push(name);
            const path = '${array[currentFolder].showPath()}, ${name},/';
            array[name] = new file(fileName[0], currentFolder, fileName[1], path);
            document.getElementById('root').innerHTML = array[currentFolder].showContents();
          } else {
            document.getElementById("errors").innerHTML = "Entered Filename already exists";
          }
        }
      } else {
        document.getElementById("errors").innerHTML = "Only 'LETTERS' and 'NUMBERS' are allowed!";
      }
    }
  } else {
    if (validateProp1(name)) {
      if (hash[currentFolder] === undefined) {
        hash[currentFolder] = [];
        hash[currentFolder].push(name);
        names.push(name);
        const path = '${array[currentFolder].showPath()}, ${name},/';
        array[name] = new folder(name, currentFolder, path);
        document.getElementById('root').innerHTML = array[currentFolder].showContents();
      } else {
        if (hash[currentFolder].indexOf(name) === -1) {
          hash[currentFolder].push(name);
          names.push(name);
          const path = '${array[currentFolder].showPath()}, ${name},/';
          array[name] = new folder(name, currentFolder, path);
          document.getElementById('root').innerHTML = array[currentFolder].showContents();
        } else {
          document.getElementById("errors").innerHTML = "Entered Folder name already exists";
        }
      }
    } else {
      document.getElementById("errors").innerHTML = "Only 'LETTERS' and 'NUMBERS' are allowed!";
    }
  }
}
$("#button2").click(function (e) {
  const up = array[currentFolder].showParent();
  currentFolder = up;
  currentStatus();
  document.getElementById('root').innerHTML = array[currentFolder].showContents();
});
$("#button3").click(function () {
  const clicked = document.getElementById("search").value;
  if (names.includes(clicked)) {
    document.getElementById("path").innerHTML = array[clicked].showPath();
    document.getElementById("path").value = names;
  } else {
    document.getElementById("errors").innerHTML  = "Entered folder or file doesn't exist!";
  }
});
function currentStatus() {
  document.getElementById('directory').innerHTML = `Current location :, ${currentFolder}`;
}

function validateProp1(value) {
  return (/^[a-zA-Z0-9()]+$/.test(value));
}

export default {hash};