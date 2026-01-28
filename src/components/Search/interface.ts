// Тип для входных данных с сервера
export interface ServerResponse {
    Search: Array<{
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }>;
    totalResults: string;
    Response: string;
}