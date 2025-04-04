export class useApi {

    private static BASE_URL = "https://api.twitch.tv/helix"

    static get stream () {
        return `${this.BASE_URL}/streams`;
    }

    static get  categories (){
        return `${this.BASE_URL}/games/top`
    }
}