import './App.css';
import { GameList } from './components/GameList';
import { GameTypeBar } from './components/GameTypeBar';
import { Logo } from './components/Logo';
import { SearchGameBar } from './components/SearchGameBar';
import { useGetAllGamesQuery } from './app/services/games';

function App() {
  const { data, isLoading, error } = useGetAllGamesQuery();
  console.log('data', data?.result);
  console.log('isLoading', isLoading);
  console.log('error', error);

  return (
    <div className="app">
      <header className="header">
        <GameTypeBar />
        <SearchGameBar data={data?.result} />
      </header>
      <Logo />
      <main className="main">{data && <GameList result={data.result} />}</main>
    </div>
  );
}

export default App;
