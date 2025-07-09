import classes from './GameTypeBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedType } from '../../app/slices/typeFilter.slice';
import type { RootState } from '../../app/store';

const options: string[] = ['ALL', 'vs', 'cs', 'lg'];

export const GameTypeBar = () => {
  const dispatch = useDispatch();
  const selectedType = useSelector(
    (state: RootState) => state.typeFilter.gameType,
  );
  console.log('selectedType', selectedType);

  return (
    <div className={classes.bar}>
      <p>Game Type</p>
      <select
        value={selectedType}
        onChange={(event) => dispatch(setSelectedType(event.target.value))}
        className={classes.select}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
