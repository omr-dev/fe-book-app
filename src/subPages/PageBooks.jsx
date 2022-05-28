import { useEffect, useState } from "react";
import axios from "axios";

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
      <h2>This is page Books.</h2>
      <h3>Total {books.length} books.</h3>
    </div>
  );
};
