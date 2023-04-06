import Cookies from "js-cookie";
import { GamingVideosListService} from ".";
import { GAMING_VIDEOS_API_URL, HOME_VIDEOS_API_URL } from "../../constants/ApiUrlConstants";


export class GamingVideosListServiceApi
  implements GamingVideosListService{
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

  getGamingVideosList = async (): Promise<Response> => {
    const response = await fetch(GAMING_VIDEOS_API_URL, this.option);
    // console.log(response);
    return response;
  };
}
