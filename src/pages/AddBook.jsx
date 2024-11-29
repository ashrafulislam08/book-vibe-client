import React from "react";

const AddBook = () => {
  return (
    <div>
      <form class="card-body lg:grid grid-cols-2">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Book Name</span>
          </label>
          <input
            type="text"
            placeholder="Book Name"
            class="input input-bordered"
            name="book"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Author</span>
          </label>
          <input
            type="text"
            placeholder="Author"
            name="author"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Book Publisher</span>
          </label>
          <input
            type="text"
            placeholder="Publisher"
            name="publisher"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Year of Publishing</span>
          </label>
          <input
            type="text"
            placeholder="Published year"
            name="publisherYear"
            class="input input-bordered"
            required
          />
        </div>
        <div class="form-control w-full col-span-2">
          <label class="label">
            <span class="label-text">Book Details</span>
          </label>
          <textarea
            placeholder="Book Details"
            className="textarea textarea-bordered textarea-lg lg:w-full"
          ></textarea>
        </div>
        <div class="form-control mt-6 col-span-2">
          <button class="btn btn-primary">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
