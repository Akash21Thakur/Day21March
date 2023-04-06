import { HomeVideosListService } from ".";
import { homeVideosListJson } from "../../fixtures/homeVideosListJson";


export class HomeVideosListServiceFixture
  implements HomeVideosListService
{
  constructor() {}

  getHomeVideosList = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const response = new Response(JSON.stringify(homeVideosListJson), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
      resolve(response);
    });
  };
}
