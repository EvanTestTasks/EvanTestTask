import classes from './GameCard.module.css';
import type { Game } from '../../app/services/types';

type GameCardProps = Pick<Game, 'gameID' | 'gameName' | 'gameTypeID'>;

export const GameCard: React.FC<GameCardProps> = ({ gameID, gameName }) => {
  return (
    <div>
      <div className={classes.card}>
        <img
          loading="lazy"
          src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
          alt={gameName}
        />
      </div>
      <p className={classes.title}>{gameName}</p>
    </div>
  );
};
