import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Pagination() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  let limit = 6;
  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=${limit}&MaNhom=GP01
                `
      );
      const data = await res.json();
      const totalCount = data.totalCount;
      setPageCount(Math.ceil(totalCount / 6));
      setItems(data.items);
    };
    getCourses();
  }, []);

  const fetchCourses = async (currentPage) => {
    const res = await fetch(`
        https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=${limit}&MaNhom=GP01
        `);
    const data = await res.json();
    return data;
  };

  const handlePageChange = async (data) => {
    let currentPage = data.selected + 1;
    const dataFromServer = await fetchCourses(currentPage);
    setItems(dataFromServer.items);
  };

  console.log(items);

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      onPageChange={handlePageChange}
    />
  );
}

export default Pagination;
