// import React, { useState } from "react";
import "./SearchBar.styles.css";

// export default function SearchBar({ onSearch }) {
//   const [term, setTerm] = useState("");

//   const handleTermChange = (event) => setTerm(event.target.value);

//   const search = () => {
//     if (!term) return;
//     onSearch(term);
//   };

//   return (
//     <div className="SearchBar">
//       <input
//         placeholder="Enter A Song, Album, or Artist"
//         onChange={handleTermChange}
//         value={term}
//         type="search"
//       />
//       <button className="SearchButton" onClick={search}>
//         SEARCH
//       </button>
//     </div>
//   );
// }

// Using Class Component

import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  search() {
    if (!this.state.term) return;
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          type="search"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
