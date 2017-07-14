import hash from './app.js';

class folder {
  constructor(name, parent_node, path) {
    this.name = name;
    this.parent_node = parent_node;
    this.path = path;
  }
  showContents() {
    if (hash[this.name] === undefined) { 
      document.getElementById("errors").innerHTML = "Noting to show";
      return "";
    } else {
      let i;
      let values = "";
      for (i = 0; i < hash[this.name].length; i++) {
        values += '<div><li>, ${hash[this.name][i]},</li></div><br/>';
      }
      return values;
    }
  }
  showParent() {
    return this.parent_node;
  }
  showPath() {
    return this.path;
  }

}
class file {
  constructor(name, parent_node, extension, path) {
    this.parent_node = parent_node;
    this.name = name;
    this.extension = extension;
    this.path = path;
  }
  showContents() {
    document.getElementById("errors").innerHTML = "It's a file bro";
  }
  showParent() {
    return this.parent_node;
  }
  showPath() {
    return this.path;
  }
}

export { file, folder };