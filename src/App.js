import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSearch = async () => {
    setLoading(true);
    //TODO: remove this line after testing
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const response = await axios.get(`/api/search?query=${searchText}`);
      setResults(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const truncateTitle = (title, limit) => {
    if (title.length > limit) {
      return title.slice(0, limit) + '...';
    }
    return title;
  };


  return (
    <div className="container">
      <header>
      <div className="header-content">
      <span className="header-icon"></span> 
        <h1 className="header-title"> Demo for AI chat </h1>
        </div>
      </header>
      <div className="input-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter search text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <div className="loader">
          <span className="loader-text">Loading...</span>
        </div>
      ) : (
        <div className="result-grid">
        {results.map((result, index) => (
          <div className="result-card" key={index}>
            <div className="result-image">
              <img src={result.imageUrl} alt="Result Image" />
            </div>
            <p className="result-title">{truncateTitle(result.resultText, 100)}</p>
            
          </div>
        ))}
      </div>
        // <ul>
        //   {results.map((result, index) => (
        //     <li key={index}>
        //       <img src={result.imageUrl} alt="" />
        //       <p>{result.resultText}</p>
        //     </li>
        //   ))}
        // </ul>
      )}
    </div>
  );
}

export default App;
