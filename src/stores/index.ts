// import ThemeStore from "./themeStore";

import HomeVideosStore from "./homeVideoStore";
import ThemeStore from "./themeStore";
import VideoDetailsStore from "./videoDetailsStore";



const themeStore=new ThemeStore();
const homeVideosStore= new HomeVideosStore();
const videoDetailsStore = new VideoDetailsStore();

export {themeStore,homeVideosStore,videoDetailsStore}

