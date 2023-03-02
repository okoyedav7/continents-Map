import React from "react";
import proptypes from "proptypes";
import _ from "lodash";

const Pagination = ({ pageSize, continentsCount, pageChange, currentPage }) => {
  const page = Math.ceil(continentsCount / pageSize);
  if (page === 1) return null;
  const pageCount = _.range(1, page + 1);

  return (
    <nav>
      <ul className="pagination">
        {pageCount.map((e) => (
          <li
            onClick={() => pageChange(e)}
            key={e}
            className={currentPage === e ? "page-item active" : "page-item"}
          >
            <a className="page-link">{e}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: proptypes.number.isRequired,
  continentsCount: proptypes.number.isRequired,
  pageChange: proptypes.func.isRequired,
  currentPage: proptypes.number.isRequired,
};

export default Pagination;
