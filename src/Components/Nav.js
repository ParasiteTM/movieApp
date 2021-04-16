// const apiKey = '?api_key=b1d121d2f5133c0252c7b87c553df81a';
// const apiEndpoint = 'https://api.themoviedb.org/3/movie/';
// const imageEndpoint = 'https://image.tmdb.org/t/p/w500/';
import { useEffect, useRef, useState } from 'react';
const Nav = ({ setMode, handleSearch, mode }) => {
  const inputRef = useRef();
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState('');
  const handleSearchClick = (e) => {
    e.target.classList.add('searchActive');
    setSearchActive(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  };
  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 2000);
  }, [searchActive]);

  return (
    <>
      <nav>
        <div className="container">
          <h1 className="logo">MovRevs</h1>
          <ul>
            <li
              className={mode === 'movie' ? 'active' : ''}
              onClick={() => setMode('movie')}
            >
              Movies
            </li>
            <li
              className={mode === 'tv' ? 'active' : ''}
              onClick={() => setMode('tv')}
            >
              Tv Shows
            </li>
          </ul>
          <div className="search" onClick={handleSearchClick}>
            <span
              className="iconify"
              data-icon="octicon-search"
              data-inline="false"
            ></span>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                style={{ display: searchActive ? 'unset' : 'none' }}
                ref={inputRef}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
