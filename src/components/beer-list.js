import { useEffect, useState } from "react";
import BeerLabel from "./beer-label";
import BeerService from "../services/beer-service";

export default function BeerList({ initBeers }) {

    const [beerPage, setBeerPage] = useState(1);
    const [beerList, setBeerList] = useState(initBeers);

    const updateBeers = async () => {
        const beers = beerList;
        const newBeers = await BeerService.getBeers(beerPage);
        beers.push(...newBeers)
        console.log(beers);
        setBeerList(beers);
    }

    useEffect(() => {
        setBeerPage(1);
        setBeerList(initBeers)
    }, [initBeers])

    useEffect(() => {
        if (beerPage > 1) {
            console.log("Updating beer list...")
            updateBeers();
        }
    }, [beerPage])

    return (
        <div>
            <div className="flex flex-wrap justify-around">
                {
                    beerList.map((beer) => (<BeerLabel key={beer.id} beer={beer} />))
                }
            </div>
            <div className="flex justify-center mt-3">
                <span className="text-[#217aca] cursor-pointer" onClick={() => { setBeerPage(beerPage + 1); }}>Load More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="11" className="inline ml-3">
                        <path fill="#217aca" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}