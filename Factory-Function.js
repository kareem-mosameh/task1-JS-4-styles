function creatbook(title,author,isRead = false) {
    const obj = {};
    obj.title = title;
    obj.author = author;
    obj.isRead = isRead;

    obj.toggleReadStatus = function () {
        this.isRead = !this.isRead
    };

    obj.describe = function () {
        return `"${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
    };

    return obj;
}
const book = creatbook("The Days","Taha Hussein",true);
console.log(book.describe());