import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import Pagination from './components/ui/Pagination';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

const  App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect( () => {
    const fetchItems = async () => {
      const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)
   
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query] )

  // Get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  //Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return(
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} /> 
      <CharacterGrid isLoading={isLoading} items={currentItems} />
      <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
    </div>
  )
}

export default App;
