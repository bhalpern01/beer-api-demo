class BeerService {
    constructor() {
        this.beerUrl = "https://api.punkapi.com/v2/beers";
        this.beerPerPage = "10";
    }

    async getBeers(page) {
        try {
            const beersResponse = await fetch(`${this.beerUrl}?per_page=${this.beerPerPage}&page=${page}`).then(res => res.json());
            return beersResponse;
        } catch (error) {
            console.log(`getBeers() API failed with error ${error}`);
            return [];
        }
    }
}

export default new BeerService();