class Book {
  constructor(id, title, author, year, available = true) {
    this.id = id
    this.title = title
    this.author = author
    this.year = year
    this.available = available
  }

  static getAll() {
    return [
      new Book(1, 'Book 1', 'Author 1', 1111),
      new Book(2, 'Book 2', 'Author 2', 2222)
    ]
  }
}

module.exports = Book
