class folder {
  constructor(name, parent_node, path) {
    this.name = name;
    this.parent_node = parent_node;
    this.path = path;
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
  showParent() {
    return this.parent_node;
  }
  showPath() {
    return this.path;
  }
}

export { file, folder };