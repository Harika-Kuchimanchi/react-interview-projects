import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredResults = data.filter((each) =>
      each.title.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredResults);
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        placeholder="Search by title"
      />
      <ul>
        {filteredData.map((each) => (
          <li key={each.id}>{each.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
