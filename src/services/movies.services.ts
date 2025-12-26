import { apiBaseUrl } from "@/constraints/ApiContraint";
import { Movie } from "@/type/movie.type";
import ApiHelper from "@/utils/apiHelper";

export class MovieService{
    private apiHelper: ApiHelper;

    constructor() {
        this.apiHelper = new ApiHelper(apiBaseUrl);
    }

    async getMovies() {
        return await this.apiHelper.get("/movies");
    }

    async getMovieById(id: number) {
        return await this.apiHelper.get(`/movies/${id}`);
    }

    async createMovie(movie: Movie) {
        return await this.apiHelper.post("/movies", movie);
    }

    async updateMovie(id: number, movie: Movie) {
        return await this.apiHelper.patch(`/movies/${id}`, movie);
    }

    async deleteMovie(id: number) {
        return await this.apiHelper.delete(`/movies/${id}`);
    }
}