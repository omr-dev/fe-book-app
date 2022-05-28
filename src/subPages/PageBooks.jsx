import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../components/Book.jsx";

const apiUrl = "https://server-book-app.herokuapp.com";

export const PageBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const _books = (await axios.get(apiUrl)).data;
      setBooks(_books);
    })();
  }, []);
  return (
    <div className="pageBooks">
      <h3>Total {books.length} books.</h3>
      {books.length === 0 && <h3>Loading...</h3>}
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
};
