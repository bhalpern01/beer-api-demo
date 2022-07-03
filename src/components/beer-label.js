import { useEffect, useState } from "react";
import { Tooltip } from "flowbite-react";

export default function BeerLabel({ beer }) {

    const [myBeer, setMyBeer] = useState(beer);

    useEffect(() => {
        setMyBeer(beer);
    }, [beer]);

    return (
        <div className="beer-label flex flex-row mt-8 p-5 shadow-[0_0_6px_rgba(235,235,235,1)] w-full max-w-screen-sm hover:bg-[#f2f8fd]">
            <div className="beer-img-wrapper min-w-fit w-24 ml-5">
                <Tooltip content={`Ingredients: ${Object.keys(myBeer.ingredients).join(", ")}`}>
                    <img src={myBeer.image_url} className="w-full max-h-28" data-tooltip-placement="top" data-tooltip-trigger="hover" />
                </Tooltip>
            </div>
            <div className="beer-text-wrapper flex flex-col w-full">
                <div className="beer-name font-bold text-xl">{myBeer.name}</div>
                <div className="beer-tagline text-left font-semibold text-[#d69f21] mt-2.5">{myBeer.tagline}</div>
                <div className="beer-description text-left text-ellipsis align-top mt-2.5 max-w-[90%] line-clamp-2">{myBeer.description}</div>
            </div>
        </div>
    );
}