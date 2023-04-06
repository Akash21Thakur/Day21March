import Cookies from "js-cookie";
import { HomeVideosListService} from ".";
import { HOME_VIDEOS_API_URL } from "../../constants/ApiUrlConstants";



export class HomeVideosListServiceApi implements HomeVideosListService {
  
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

  getHomeVideosList = async (): Promise<Response> => {
    const response = await fetch(HOME_VIDEOS_API_URL, this.option);
    // console.log(response);
    return response;
  };
}
