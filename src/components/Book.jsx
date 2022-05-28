export const Book = (props) => {
  const book = props.book;
  return (
    <div className="bookBox">
      <div className="imageSide">
        <img
          src={`https://edwardtanguay.netlify.app/share/images/techBooks/${book.idCode}.jpg`}
        />
      </div>
      <div className="infoSide">
        <h4>{book.title}</h4>
        <p>{book.description}</p>
      </div>
    </div>
  );
};
