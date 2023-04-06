import { GamingVideosListService} from ".";
import { gamingVideosListJson } from "../../fixtures/gamingVideosListJson";
import { homeVideosListJson } from "../../fixtures/homeVideosListJson";


export class GamingVideosListServiceFixture
  implements GamingVideosListService
{
  constructor() {}

  getGamingVideosList = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const response = new Response(JSON.stringify(gamingVideosListJson), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
      resolve(response);
    });
  };
}
