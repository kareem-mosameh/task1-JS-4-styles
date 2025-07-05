const book = {
    title: "The Days",
    author: "Taha Hussein",
    isRead: false,

    toggleReadStatus() {
        this.isRead = !this.isRead;
    },
    describe() {
        return `"${this.title}" by ${this.author} [${this.isRead ? "Read" : "Unread"}]`;
    }
};
book.toggleReadStatus();
console.log(book.describe());
