import classes from './Logo.module.css';
import LogoIcon from '../../assets/LogoIcon.svg';

export const Logo = () => {
  return (
    <div className={classes.main}>
      <img src={LogoIcon} alt="logo" />
      <span className={classes.title}>Pragmatic Play</span>
    </div>
  );
};
