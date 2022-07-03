import { useEffect, useState } from "react";
import BeerList from "./components/beer-list";
import BeerService from "./services/beer-service";

function App() {

  const [beerList, setBeerList] = useState([]);

  const initBeers = async () => {
    const newBeers = await BeerService.getBeers(1);
    setBeerList(newBeers);
  }

  useEffect(() => {
    console.log("Init beer list...")
    initBeers();
  }, [])

  return (
    <div className="App container flex flex-col justify-around">
      <span className="font-bold text-slate-500 text-lg w-full max-w-screen-sm pl-[5%]">Beers</span>
        <BeerList initBeers={beerList}></BeerList>
    </div>
  );
}

export default App;
