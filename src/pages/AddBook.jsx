import React from "react";
import Swal from "sweetalert2";

const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.book.value;
    const author = form.author.value;
    const publisher = form.publisher.value;
    const publishedYear = form.publishedYear.value;
    const bookDetails = form.details.value;
    const photo = form.photo.value;
    const book = {
      bookName,
      author,
      publisher,
      publishedYear,
      bookDetails,
      photo,
    };
    console.log(book);

    // send book to server
    fetch("http://localhost:4000/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successfully Added a Book",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddBook} className="card-body lg:grid grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            type="text"
            placeholder="Book Name"
            className="input input-bordered"
            name="book"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            type="text"
            placeholder="Author"
            name="author"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Publisher</span>
          </label>
          <input
            type="text"
            placeholder="Publisher"
            name="publisher"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Year of Publishing</span>
          </label>
          <input
            type="text"
            placeholder="Published year"
            name="publishedYear"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full col-span-2">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control w-full col-span-2">
          <label className="label">
            <span className="label-text">Book Details</span>
          </label>
          <textarea
            placeholder="Book Details"
            className="textarea textarea-bordered textarea-lg lg:w-full"
            name="details"
          ></textarea>
        </div>
        <div className="form-control mt-6 col-span-2">
          <button className="btn btn-primary">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
