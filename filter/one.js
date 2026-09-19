const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mynum = num.filter((ele) => ele > 4);
// console.log(mynum);

const myNum = num.filter((val) => val % 2 == 1);
// console.log(myNum);

const myArray = ["js", "python", "java", "cpp"];
const array = myArray.filter((val) => val);
// console.log(array);

const Book = [
  {
    title: "book one",
    subject: "History",
    publish: 2000,
    edition: 2008,
  },
  {
    title: "book two",
    subject: "Non-History",
    publish: 1986,
    edition: 2012,
  },
  {
    title: "book three",
    subject: "Science",
    publish: 1998,
    edition: 2010,
  },
  {
    title: "book four",
    subject: "Physology",
    publish: 2005,
    edition: 2013,
  },
  {
    title: "book five",
    subject: "History",
    publish: 1999,
    edition: 2008,
  },
  {
    title: "book six",
    subject: "Non-History",
    publish: 1995,
    edition: 2005,
  },
  {
    title: "book seven",
    subject: "Fiction",
    publish: 2001,
    edition: 2011,
  },
  {
    title: "book Eight",
    subject: "Science",
    publish: 1992,
    edition: 2003,
  },
  {
    title: "book Nine",
    subject: "Non-Fiction",
    publish: 1987,
    edition: 2001,
  },
];

let userBook = Book.filter((book) => book.edition === 2008);
// console.log(userBook);

userBook = Book.filter((book) => {
  return book.publish >= 1995;
});
// console.log(userBook);
// when you open scope then (return nesesiory)

let myBook = Book.filter((book) => book.title === "book three");

// console.log(myBook);

Book.filter((book) => {
  if (book.subject === "History") {
    console.log(book);
  }
});
