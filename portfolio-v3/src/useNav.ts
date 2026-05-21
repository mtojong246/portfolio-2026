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

    const navigateToSection = (id: string) => {
        const section = document.getElementById(id);

        if (section && pathname === '/') {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${id}`);
        }

    }

    return {
        navigateToRoute,
        navigateToHome,
        navigateToSection,
    }
};

export default useNav;