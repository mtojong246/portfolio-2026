import { useLocation, useNavigate } from "react-router";

const useNav = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navigateToRoute = (url: string) => {
        navigate(url);
        window.scrollTo(0,0);
    };

    const navigateToHome = () => {
        if (pathname === '/') {
            navigate(0);
        } else {
            navigate('/')
        };
        window.scrollTo(0,0);
    }

    return {
        navigateToRoute,
        navigateToHome,
    }
};

export default useNav;