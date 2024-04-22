// eslint-disable-next-line react/prop-types
const SearchBar = ({inputValue, setInputValue}) => {
    return (
        <div className="search-bar">
            <input
            type="search"
            className="search-input"
            placeholder="search for a repo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
             />
        </div>
    )
}
export default SearchBar