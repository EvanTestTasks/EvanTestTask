import classes from './SearchGameBar.module.css';
import type { Game } from '../../app/services/types';
import { useDispatch } from 'react-redux';
import { searchName } from '../../app/slices/search.slice';

type SearchProps = {
  data?: Game[];
};

export const SearchGameBar: React.FC<SearchProps> = ({ data }) => {
  const dispatch = useDispatch();
  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(searchName(event.target.value.toLowerCase()));
  };

  if (!data) return null;
  return (
    <div className={classes.bar}>
      <span>Search</span>
      <div className={classes.inputWrapper}>
        <input
          placeholder="Search"
          onChange={handleSearchName}
          className={classes.input}
          type="text"
        />
        <button className={classes.button}>SEARCH</button>
      </div>
    </div>
  );
};
