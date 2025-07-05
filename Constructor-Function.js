function bookConstructor(title,author,isRead = false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}
bookConstructor.prototype.toggleReadStatus = function () {
    this.isRead = !this.isRead;
}
bookConstructor.prototype.describe = function () {
    return `"${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
}

const book = new bookConstructor("The Days","Taha Hussein",true);
const book2 = new bookConstructor("The Days","Taha Hussein",true);
console.log(book.describe());