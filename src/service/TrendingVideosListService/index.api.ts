import Cookies from "js-cookie";
import { TrendingVideosListService } from ".";
import {
  GAMING_VIDEOS_API_URL,
  HOME_VIDEOS_API_URL,
  TRENDING_VIDEOS_API_URL,
} from "../../constants/ApiUrlConstants";

export class TrendingVideosListServiceApi implements TrendingVideosListService {
  option: Object;

  constructor() {
    const token = Cookies.get("jwt_token");
    this.option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    };
  }

  getTrendingVideosListService = async (): Promise<Response> => {
    const response = await fetch(TRENDING_VIDEOS_API_URL, this.option);
    // console.log(response);
    return response;
  };
}
