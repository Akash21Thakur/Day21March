import Cookies from "js-cookie";
import { VideoDetailsPageService } from ".";
import {
  TRENDING_VIDEOS_API_URL,
} from "../../constants/ApiUrlConstants";

export class VideoDetailsPageServiceApi implements VideoDetailsPageService {
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

  getVideoDetailsPageService = async (url: string): Promise<Response> => {
    const response = await fetch(url, this.option);
    // console.log(response);
    return response;
  };
}
