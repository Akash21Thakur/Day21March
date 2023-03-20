import { action, makeObservable, observable } from "mobx";

class ThemeStore {
    isDark: boolean = false;

    constructor(){
        makeObservable(this,{
            isDark: observable,
            toggleTheme: action
        })
    }

    toggleTheme(){
        console.log("Clicked");
        this.isDark=!this.isDark;
    }
}



export default ThemeStore;