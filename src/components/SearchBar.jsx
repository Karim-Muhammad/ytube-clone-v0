import { IconButton, Paper } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 10,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
        placeholder="search..."
      />

      <IconButton
        type="submit"
        aria-label="search"
        sx={{ p: "10px", color: "red" }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
