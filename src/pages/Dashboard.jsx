import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <section className="lg:grid grid-cols-2">
      {books.map((book) => (
        <div key={book._id} className="flex gap-2 p-4">
          <div>
            <img className="w-[350px]" src={book.photo} alt="" />
          </div>
          <div>
            <h2 className="text-2xl">{book.bookName}</h2>
            <p className="text-xl my-2">{book.author}</p>
            <p className="text-sm">{book.bookDetails.slice(0, 250)}...</p>
            <p className="my-2">Publisher: {book.publisher}</p>
            <button className="btn btn-warning">X</button>
            <button className="btn btn-success ml-2">Update</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dashboard;
