class Task {
  constructor(id, title, description, completed, creationDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.creationDate = creationDate;
    this.completed = completed;
  }
}

module.exports = Task;
