import React from 'react';


function SearchBar(props) {
    return (
        <div className={props.classNameName}>
            <form className="searchbar">
                <input type="search" placeholder="Search..." name="search" className="searchbar-input" onClick={() => buttonUp} required />
                <input type="submit" className="searchbar-submit" value="GO" />
                <span className="searchbar-icon">
                    🔍
                </span>
            </form>
        </div>
    )
}


export default SearchBar;
