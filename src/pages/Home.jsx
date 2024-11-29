import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <Banner />
      <section className="lg:grid grid-cols-3 gap-3 ">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Home;
