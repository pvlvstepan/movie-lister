import { useLocation } from 'react-router-dom';

const useWidnowLocation = () => {

    const location = useLocation();
    let title = '';
    let type = '';

    if (location.pathname === '/movies/new') {
        title = 'New Releases';
        type = 'year';
    } else if (location.pathname === '/movies/rating') {
        title = 'Top Rated';
        type = 'rating';
    } else if (location.pathname === '/movies/likes') {
        title = 'Top Likes';
        type = 'like_count';
    } else if (location.pathname === '/movies/downloads') {
        title = 'Top Downloads';
        type = 'download_count';
    } else if (location.pathname === '/movies/recent') {
        title = 'Recently Added';
        type = 'date_added';
    } else {
        title = 'All Movies';
        type = 'all';
    }

    return { title, type };
};

export default useWidnowLocation;
