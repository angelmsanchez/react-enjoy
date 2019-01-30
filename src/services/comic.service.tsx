import axios, { AxiosResponse, AxiosError } from 'axios';

class ComicService {
  private url: string = 'https://dc-rebirth.now.sh/';

  getList(): Promise<void | any[]> {
    return axios
      .get<any[]>(this.url)
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        return error;
      });
  }
}

export const comicService = new ComicService();
