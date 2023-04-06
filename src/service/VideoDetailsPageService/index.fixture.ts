import { VideoDetailsPageService } from ".";
import { trendingVideosListJson } from "../../fixtures/trendingVideosListJson";
import { videoDetailsJson } from "../../fixtures/videoDetailsJson";


export class VideoDetailsPageServiceFixture
  implements VideoDetailsPageService
{
  constructor() {}

  getVideoDetailsPageService = async (url: string): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const response = new Response(JSON.stringify(videoDetailsJson), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
      resolve(response);
    });
  };
}
