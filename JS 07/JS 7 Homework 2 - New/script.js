function book(title,author) {
let book1 = {
    title: title,
    author: author,
    readingStatus: '',
    readingInfo () {
        if (this.readingStatus === true) {
            let p = document.createElement("p");
            let body = document.getElementsByTagName("body")[0];
            p.textContent = `Already read ${this.title} by ${this.author}`;
            body.appendChild(p);
        } else if (this.readingStatus === false) {
            let p = document.createElement("p");
            let body = document.getElementsByTagName("body")[0];
            p.textContent = `You still need to read ${this.title} by ${this.author}`;
            body.appendChild(p);
        }
    }
    
}
return book1;
}
let book1 = book("World Of Warcraft: Arthas", 'Christie Golden')
let book2 = book("Lord of the Rings", 'J.R.R. Tolkien')
let book3 = book("JavaScript: The Good Parts", "Douglas Crockford" )
// Book 1
let book1True = document.getElementById("book1ButtonTrue")
let book1False = document.getElementById("book1ButtonFalse")
book1True.addEventListener('click', function bookRead() {
    book1.readingStatus = true;
    book1.readingInfo();
})
book1False.addEventListener('click', function bookRead() {
    book1.readingStatus = false;
    book1.readingInfo();
});
// Book 2
let book2True = document.getElementById("book2ButtonTrue")
let book2False = document.getElementById("book2ButtonFalse")
book2True.addEventListener('click', function bookRead() {
    book2.readingStatus = true;
    book2.readingInfo();
})
book2False.addEventListener('click', function bookRead() {
    book2.readingStatus = false;
    book2.readingInfo();
});
// Book 3
let book3True = document.getElementById("book3ButtonTrue")
let book3False = document.getElementById("book3ButtonFalse")
book3True.addEventListener('click', function bookRead() {
    book3.readingStatus = true;
    book3.readingInfo();
})
book3False.addEventListener('click', function bookRead() {
    book3.readingStatus = false;
    book3.readingInfo();
});