import { useEffect, useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import FadeIn from "react-fade-in";
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
      {books.length === 0 ? (
        <>
          <div>
            <FaSpinner className="spinner" />
          </div>
        </>
      ) : (
        <h3>Total {books.length} books.</h3>
      )}
      <FadeIn>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </FadeIn>
    </div>
  );
};
