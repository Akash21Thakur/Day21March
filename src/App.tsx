import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import HomePage from './routes/HomePage';
import { darkTheme, GlobalStyle, lightTheme} from './style/globalStyle';
import { ThemeProvider } from 'styled-components';

// import themeStore from './stores/themeStore';
import { inject, observer, Provider } from 'mobx-react';

import SavedVideosPage from './routes/SavedVideosPage';
import GamingPage from './routes/GamingPage';
import TrendingPage from './routes/TrendingPage';
import ThemeStore from './stores/themeStore';
import VideoPlayerDiv from './routes/VideoPlayerDiv';
import PageNotFound from './routes/PageNotFound';

interface InjectedProps {
  themeStore: ThemeStore;
}


const App: React.FC = inject('themeStore')(observer(((props) => {

  // const toggleTheme = () => {
  //   // console.log(props);
    
  //   setTheme((prev) => {
  //      if(prev==="light")
  //        return "dark";
  //     return "light" ;
  //   })
  // }

  const {themeStore} = props as InjectedProps;

  return (
    // <LoginPage />
    // <BrowserRouter>
    // {/* <div>Hey</div> */}
    // </BrowserRouter>
    // <BrowserRouter>
    // <Routes>        
        // {/* <Route path="/" element={<LoginPage/>}/> */}
        <>
        <ThemeProvider theme={themeStore.isDark ? darkTheme : lightTheme}>

        <GlobalStyle />
        <BrowserRouter> 
                
           <Routes>        
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="/trending" element={<TrendingPage />}/>
              <Route path="/gaming" element={<GamingPage />}/>
              <Route path="/saved-videos" element={<SavedVideosPage />}/>
              <Route path='/videos/:id' element={<VideoPlayerDiv/>} />
              <Route path="*" element={<PageNotFound />} />
              {/* </Route> */}
                
              
              {/* <Route path='/team-matches/:id' element={<TeamMatches/>} /> */}
           </Routes>  
          {/* <Home/> */}
        </BrowserRouter>
        </ThemeProvider>
        </>
        
  );
})))

export default App;
// export {ThemeContext1};
