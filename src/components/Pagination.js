import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, setPage }) => {
  const handlePageClick = ({ selected }) => setPage(selected);
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName='pagination'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      activeClassName='active'
    />
  );
};

export default Pagination;
