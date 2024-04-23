//This function is from the React Router Dom documentation for scroll restoration: source - https://v5.reactrouter.com/web/guides/scroll-restoration
//This function restores the scroll progress of the user when entering a new page. Without this function, users were entering new pages at different start points
import { useEffect } from "react";
import {useLocation} from "react-router-dom";

export default function ScrollToTop(){
    const {pathname} = useLocation();// this is referring to page location

    useEffect(() => {
          window.scrollTo(0,0);// make page window start from the beginning, 0.
    }, [pathname]);

    return null;
}