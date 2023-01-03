import React from 'react'
import './index.scss';
import searchIcon from '../../assets/icons/search.svg'

const Search = () => {
  return (
    <div className='search flex'>
      <input type="search" name="search" id="search" placeholder='Search for anything' />
      <div className='search-icon flex-center align-center'>
        <img src={searchIcon} alt="Search Icon" />
      </div>
    </div>
  )
}

export default Search