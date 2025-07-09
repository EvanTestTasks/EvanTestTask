import { GameCard } from '../GameCard';
import type { GameData } from '../../app/services/types';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

export const GameList: React.FC<GameData> = ({ result }) => {
  const searchGame = useSelector((state: RootState) => state.search.searchName);
  const typeOfGames = useSelector(
    (state: RootState) => state.typeFilter.gameType,
  );
  const filteredGames = result?.filter((p) =>
    p.gameName.toLowerCase().includes(searchGame),
  );

  if (!filteredGames) return null;

  return filteredGames.map((game) => {
    if (typeOfGames === 'ALL' || game.gameTypeID === typeOfGames)
      return (
        <div>
          <GameCard
            gameTypeID={game.gameTypeID}
            gameID={game.gameID}
            gameName={game.gameName}
          />
        </div>
      );
  });
};
