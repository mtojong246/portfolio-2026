import { useNavigate } from "react-router";

const useNav = () => {
    const navigate = useNavigate();

    const navigateToRoute = (url: string) => {
        navigate(url);
        window.scrollTo(0,0);
    }

    return {
        navigateToRoute,
    }
};

export default useNav;