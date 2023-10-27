
import { FaSearch } from 'react-icons/fa';

import "./SearchCity.css"
const SearchCity = () => {
  return (
    <div id="city-search">
      <form>
        <label>
          <p id='text-search'>Busque por sua cidade:</p>
          <input  type="text" name="city" id="input-search" />
          <FaSearch /> 
        </label>
      </form>
    </div>
  );
};

export default SearchCity;

