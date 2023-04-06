import { TrendingVideosListService } from ".";
import { gamingVideosListJson } from "../../fixtures/gamingVideosListJson";
import { homeVideosListJson } from "../../fixtures/homeVideosListJson";
import { trendingVideosListJson } from "../../fixtures/trendingVideosListJson";


export class TrendingVideosListServiceFixture
  implements TrendingVideosListService
{
  constructor() {}

  getTrendingVideosListService = async (): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const response = new Response(JSON.stringify(trendingVideosListJson), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
      resolve(response);
    });
  };
}
