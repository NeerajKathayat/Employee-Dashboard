import React, { useState } from 'react';

const SearchFunc = ({ setFilteredEmployees, employees, setNoResultsFound, setLoading, SearchKeyword, setSearchKeyword }) => {



  const handleSearch = async (searchTerm) => {

    setSearchKeyword(searchTerm)

    setLoading(true)

    if (searchTerm == '') {
      setFilteredEmployees(employees)
      setNoResultsFound(false);
      setLoading(false);
      console.log("D")
      return
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    const result = employees.filter(emp => emp.id === parseInt(searchTerm));
    if (result.length > 0) {
      setFilteredEmployees(result);
      setNoResultsFound(false);
    } else {
      setFilteredEmployees([]);
      setNoResultsFound(true);
    }



    setLoading(false)

  };

  return (
    <div className='flex w-full justify-center'>


    <input
        className='outline-none border border-gray-300 rounded-l-full w-full md:max-w-[40%] px-2 py-1 pl-5'
        value={SearchKeyword}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder='Search Employee with ID'

    ></input>


    <div className="rounded-r-full flex items-center bg-secondary bg-gray-400 cursor-pointer px-4 py-1 "

    >
        <i class="fa-solid fa-magnifying-glass "></i>
    </div>




</div>
  );
};

export default SearchFunc;