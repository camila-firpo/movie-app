import React from "react"




function Search() {
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover";
        const {
          data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
          params: {
            api_key: API_KEY,
            query: searchKey,
          },
        });
    }
    
    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
      };

    return(
        <form className="container mb-4" onSubmit={searchMovies}>
            <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchKey(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
        </form>
    )
}

export default Search;