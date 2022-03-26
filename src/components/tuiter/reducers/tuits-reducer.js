import tuits from '../data/tuits.json';

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            })
        case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'create-tuit':
            // create new tuit with several default values
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    username: "ReactJS"
                },
                handle: "ReactJS",
                stats: {
                    comments: 333,
                    retuits: 111,
                    likes: 222
                },
                logo_image: "../tuiter/images/elon.jpeg",
                avatar_image: "../tuiter/images/react-blue.jpeg"
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits
    }

};

export default tuitsReducer;