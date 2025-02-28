import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const PaginationJump = () => {
  const [currentPage, setCurrentpage] = useState(1);
  const [jumpToPage, setJumpTopage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

  const totalItemsPerPage = 10;
  const totalPages = Math.round(data.length / totalItemsPerPage);

  const firstIndex = currentPage * totalItemsPerPage - totalItemsPerPage;
  const lastIndex = currentPage * totalItemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  const handleCurrentPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentpage(page);
  };

  const handleJumpToPage = (e) => {
    if (e.target.value >= 1 && e.target.value <= totalPages)
      setJumpTopage(e.target.value);
  };

  const handleJump = () => setCurrentpage(jumpToPage);

  useEffect(() => {
    async function FetchApiPaginated(page = 1, result = []) {
      const api = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;
      try {
        const data = await fetch(api, { method: 'GET' });
        const response = await data.json();
        console.log(`Fetched page ${page}`);
        result = result.concat(response);
        if (response.length > 0 && page < 10) {
          setLoading(true);
          return await FetchApiPaginated(page + 1, result);
        } else {
          console.log('No more pages');
          setLoading(false);
          setData(result);
        }
      } catch (error) {
        throw new Error(
          'Please cross-check your URL or check your internet connection.'
        );
      }
    }
    FetchApiPaginated();
  }, []);

  return (
    <div>
      <h1>Jump to Page And Button Pagination </h1>
      <ol start={firstIndex + 1}>
        {!loading ? (
          currentItems?.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <ClipLoader size={40} color="black" loading={loading} />
        )}
      </ol>
      <button onClick={() => handleCurrentPage(currentPage - 1)}>PREV</button>
      {Array.from({ length: totalPages }, (_, i) =>
        i < 5 ? (
          <button onClick={() => setCurrentpage(i + 1)}>{i + 1}</button>
        ) : (
          '.'
        )
      )}
      <button onClick={() => handleCurrentPage(currentPage + 1)}>NEXT</button>
      <input
        type="number"
        onChange={handleJumpToPage}
        onBlur={handleJump}
        value={jumpToPage}
        min={1}
        max={totalPages}
      />
    </div>
  );
};

export default PaginationJump;
