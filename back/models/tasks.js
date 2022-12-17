class Task {
  constructor(id, title, description, completed, creationDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.creationDate = creationDate;
  }
}

module.exports = Task;
