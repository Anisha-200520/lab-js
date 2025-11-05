// 📘 Book class
class Book {
  constructor(title, author, publisher, publishedDate) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.publishedDate = new Date(publishedDate); // Store as Date object
  }

  // Method to return a summary of the book
  summary() {
    return `📖 "${this.title}" by ${this.author}, published by ${this.publisher} in ${this.publishedDate.getFullYear()}.`;
  }
}

// 💻 Ebook subclass extending Book
class Ebook extends Book {
  constructor(title, author, publisher, publishedDate, fileName) {
    super(title, author, publisher, publishedDate); // Call parent constructor
    this.fileName = fileName;
  }

  // Overridden summary method to include file info
  summary() {
    return `${super.summary()} [File: ${this.fileName}]`;
  }
}

// 🧪 Create instances and test
const book1 = new Book("The Alchemist", "Paulo Coelho", "HarperCollins", "1993-05-01");
const book2 = new Book("Clean Code", "Robert C. Martin", "Prentice Hall", "2008-08-01");

const ebook1 = new Ebook("JavaScript Essentials", "Benisha Dev", "CodePress", "2023-01-15", "js_essentials.pdf");
const ebook2 = new Ebook("Python for Beginners", "Anisha AI", "TechBooks", "2022-07-10", "python_beginners.epub");

// 🖨️ Display summaries
console.log(book1.summary());
console.log(book2.summary());
console.log(ebook1.summary());
console.log(ebook2.summary());