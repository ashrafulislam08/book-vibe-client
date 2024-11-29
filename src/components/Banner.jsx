import React from "react";

const Banner = () => {
  return (
    <section className="flex items-center">
      <div className="1/2 mx-auto">
        <h2 className="lg:text-5xl mb-4">
          Books to freshen up <br /> your bookshelf
        </h2>
        <button className="btn btn-primary">View the list</button>
      </div>
      <div className="w-1/3 mx-auto">
        <img
          src="https://images-cdn.ubuy.co.in/653a508399ea9921a74f3a04-forbena-floating-shelves-36-inches-long.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
