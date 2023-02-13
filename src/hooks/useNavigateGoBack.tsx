import { useNavigate } from "react-router-dom";

/** Navigate to the top of a page so that the scroll position 
 * isn't persisted between pages. Use this instead of React Dom's 
 * build-in @see {@link useNavigate}. */
export const useNavigateGoBack = () => {
    const navigate = useNavigate();

    const navigateAndReset = () => {
        navigate(-1);
        window.scrollTo(0, 0);
    };

    return navigateAndReset;
};