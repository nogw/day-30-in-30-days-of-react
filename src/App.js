import React, { useState } from 'react';
import GlobalStyle from './styles'
import Navbar from './components/Navbar'
import Items from './components/Items';
import Data from './list'

function App() {
  const [search, setSearch] = useState("")

  const FilteredProject = Data.filter(list => 
    list.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Navbar placeholder="Search for a project" onChange={e => handleChange(e)}/>
      <Items Data={FilteredProject} />
      <GlobalStyle/>
    </>
  );
}

export default App;
