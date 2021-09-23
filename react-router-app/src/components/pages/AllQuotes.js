import React from "react";
import { Link } from "react-router-dom";

const AllQuotes = () => {
  return (
    <div>
      <h1>
        <Link to="/quotes">All Quotes</Link>
      </h1>
      <ul>
        <li>
          <Link to="/quotes/p1">1</Link>
        </li>
      </ul>
    </div>
  );
};

export default AllQuotes;
