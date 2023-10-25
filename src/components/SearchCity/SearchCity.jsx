
import { FaSearch } from 'react-icons/fa';

const SearchCity = () => {
  return (
    <div id="city-search">
      <form>
        <label>
          <span>Busque por sua cidade</span>
          <input type="text" name="city" id="city" placeholder="Digite aqui" />
          <FaSearch /> 
        </label>
      </form>
    </div>
  );
};

export default SearchCity;

