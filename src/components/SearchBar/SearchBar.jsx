import InputField from "../formComponents/InputField"; 

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <InputField
      type="text"
      label="Search by name"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Enter client name"
    />
  );
}

export default SearchBar;
