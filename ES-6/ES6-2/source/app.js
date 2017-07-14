import {folder,file} from './class.js'
import $ from 'jquery'
window.onload = function() {
  const hash = [];
  let currentFolder = "root";
  const array = [];
  const names = [];
  names.push("root");
  const dot = ".";
  currentStatus();
  const a = document.getElementById("button1");
  a.addEventListener("click", check);
  const b = document.getElementById("button2");
  b.addEventListener("click", moveUp);
  array["root"] = new folder("root", "ssss", "root/");
  $("div").click(function (evt) {
    const clicked = evt.target;
    if (!clicked.innerHTML.includes(dot)) {
      currentFolder = clicked.innerHTML;
      document.getElementById('root').innerHTML = showContents(currentFolder);
      currentStatus();
    } else {
      $("#errors").show();
      document.getElementById("errors").innerHTML = "It's a file bro";
      setTimeout(function() { 
        $('#errors').fadeOut(); 
      }, 3000);
    }
  });

  function check() {
    const name = document.getElementById('decode').value;
    if (name.includes(dot)) {
      const fileName = name.split(".");
      if (fileName.length > 2) {
        $("#errors").show();
        document.getElementById("errors").innerHTML = "Enter File name in (name).(extension) format";
        setTimeout(function() { 
          $('#errors').fadeOut(); 
        }, 3000);
      } else {
        if (validateProp1(fileName[0]) && validateProp1(fileName[1])) {
          if (hash[currentFolder] === undefined) {
            hash[currentFolder] = [];
            hash[currentFolder].push(name);
            names.push(name);
            const path = `${array[currentFolder].showPath()}${name}/`;
            array[name] = new file(fileName[0], currentFolder, fileName[1], path);
            document.getElementById('root').innerHTML = showContents(currentFolder);
          } else {
            if (hash[currentFolder].indexOf(name) === -1) {
              hash[currentFolder].push(name);
              names.push(name);
              const path = `${array[currentFolder].showPath()}${name}/`;
              array[name] = new file(fileName[0], currentFolder, fileName[1], path);
              document.getElementById('root').innerHTML = showContents(currentFolder);
            } else {
              $("#errors").show();
              document.getElementById("errors").innerHTML = "Entered Filename already exists";
              setTimeout(function() { 
                $('#errors').fadeOut(); 
              }, 3000);
            }
          }
        } else {
          $("#errors").show();
          document.getElementById("errors").innerHTML = "Only 'LETTERS' and 'NUMBERS' are allowed!";
          setTimeout(function() { 
            $('#errors').fadeOut(); 
          }, 3000);
        }
      }
    } else {
      if (validateProp1(name)) {
        if (hash[currentFolder] === undefined) {
          hash[currentFolder] = [];
          hash[currentFolder].push(name);
          names.push(name);
          const path = `${array[currentFolder].showPath()}${name}/`;
          array[name] = new folder(name, currentFolder, path);
          document.getElementById('root').innerHTML = showContents(currentFolder);
        } else {
          if (hash[currentFolder].indexOf(name) === -1) {
            hash[currentFolder].push(name);
            names.push(name);
            const path = `${array[currentFolder].showPath()}${name}/`;
            array[name] = new folder(name, currentFolder, path);
            document.getElementById('root').innerHTML = showContents(currentFolder);
          } else {
            document.getElementById("errors").innerHTML = "Entered Folder name already exists";
          }
        }
      } else {
        $("#errors").show();
        document.getElementById("errors").innerHTML = "Only 'LETTERS' and 'NUMBERS' are allowed!";
        setTimeout(function() { 
          $('#errors').fadeOut(); 
        }, 3000);
      }
    }
    
  }
  function moveUp() {
    const up = array[currentFolder].showParent();
    currentFolder = up;
    currentStatus();
    document.getElementById('root').innerHTML = showContents(currentFolder);
  }
  $("#button3").click(function () {
    const clicked = document.getElementById("search").value;
    if (names.includes(clicked)) {
      document.getElementById("path").innerHTML = array[clicked].showPath();
      document.getElementById("path").value = names;
    } else {
      $("#errors").show();
      document.getElementById("errors").innerHTML  = "Entered folder or file doesn't exist!";
      setTimeout(function() { 
        $('#errors').fadeOut(); 
      }, 3000);
    }
  });
  function currentStatus() {
    document.getElementById('directory').innerHTML = `Current location : ${currentFolder}`;
  }
  function validateProp1(value) {
    return (/^[a-zA-Z0-9()]/.test(value));
  }
  function showContents(name) {
    if (hash[name] === undefined) { 
      $("#errors").show();
      document.getElementById("errors").innerHTML = "Noting to show";
      setTimeout(function() { 
        $('#errors').fadeOut(); 
      }, 3000);
      return "";
    } else {
      let i;
      let values = "";
      for (i = 0; i < hash[name].length; i++) {
        values += `<div><li>${hash[name][i]}</li></div><br/>`;
      }
      return values;
    }
  }
}
