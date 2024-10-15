import React, { useState } from 'react';
import { Dropdown, Form, InputGroup, Pagination } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import styles from './ProductFilterBar.module.css';

export default function ProductFilterBar () {
  const [itemsToShow, setItemsToShow] = useState(16); // State for showing items
  const [sortBy, setSortBy] = useState('default'); // State for sorting
  const [totalResults] = useState(32); // Example total results
  const navigate = useNavigate(); // To handle routing

  // Handle change in 'Show' dropdown
  const handleItemsToShowChange = (e) => {
    setItemsToShow(e.target.value);
    // Logic to update results could go here
  };

  // Handle change in sorting dropdown
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    // Logic to update sorting could go here
  };

  // Pagination logic
  const totalPages = Math.ceil(totalResults / itemsToShow);
  const handlePageChange = (pageNumber) => {
    // This would navigate to a new page based on pagination
    navigate(`/page/${pageNumber}`);
  };

  return (
    <div className={styles.productFilterBar}>
      <div className={styles.filterSection}>
        <FaFilter className={styles.filterIcon} /> 
        <span>Filter</span>

        {/* Showing x results */}
        <span className={styles.resultsText}>Showing 1-{itemsToShow} of {totalResults} results</span>
      </div>

      <div className={styles.showSection}>
        {/* Show Dropdown */}
        <InputGroup style={{ width: '100px' }}>
          <Form.Select value={itemsToShow} onChange={handleItemsToShowChange}>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="48">48</option>
          </Form.Select>
        </InputGroup>
      </div>

      <div className={styles.sortSection}>
        {/* Sort By Dropdown */}
        <Dropdown onSelect={handleSortChange}>
          <Dropdown.Toggle variant="light">
            {sortBy === 'default' ? 'Sort by: Default' : `Sort by: ${sortBy}`}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="default">Default</Dropdown.Item>
            <Dropdown.Item eventKey="price">Price</Dropdown.Item>
            <Dropdown.Item eventKey="popularity">Popularity</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Pagination */}
      <Pagination className={styles.paginationSection}>
        <Pagination.Prev onClick={() => handlePageChange(1)} />
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item key={number} onClick={() => handlePageChange(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(totalPages)} />
      </Pagination>
    </div>
  );
}