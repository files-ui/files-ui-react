import { useNavigate } from "react-router-dom";

/** Navigate to the top of a page so that the scroll position 
 * isn't persisted between pages. Use this instead of React Dom's 
 * build-in @see {@link useNavigate}. */
export const useNavigateToTop = () => {
    const navigate = useNavigate();

    const navigateAndReset = (to: string) => {
        navigate(to, { replace: true });
        window.scrollTo(0, 0);
    };

    return navigateAndReset;
};