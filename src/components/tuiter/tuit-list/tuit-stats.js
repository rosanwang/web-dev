import {updateTuit}
    from "../../actions/tuits-actions";
import {useDispatch} from "react-redux";

const TuitStats = ({
                       tuit = {
                           _id: '123',
                           topic: 'Web Development',
                           postedBy: {
                               "username": "ReactJS"
                           },
                           liked: true,
                           verified: false,
                           handle: "ReactJS",
                           time: "2h",
                           title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                           tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                           attachments: {
                               video: "unKvMC3Y1kI"
                           },
                           logo_image: "../../../images/react-blue.png",
                           avatar_image: "../../../images/react-blue.png",
                           stats: {
                               comments: 123,
                               retuits: 234,
                               likes: 345
                           }
                       }
}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="row mt-2">
            <span className="col">
                <i className="far fa-comment me-2"/>
                {tuit.stats.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"/>
                {tuit.stats.retuits}
            </span>
            <span className="col">
                Likes: {tuit.stats.likes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit, stats: {
                        comments: tuit.stats.comments,
                        retuits: tuit.stats.retuits,
                        likes: tuit.stats.likes + 1,
                        dislikes: tuit.stats.dislikes
                    }
                })} className="far fa-thumbs-up ms-2"/>
            </span>
            <span className="col">
                Dislikes: {tuit.stats.dislikes}
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit, stats: {
                        comments: tuit.stats.comments,
                        retuits: tuit.stats.retuits,
                        likes: tuit.stats.likes,
                        dislikes: tuit.stats.dislikes + 1
                    }
                })} className="far fa-thumbs-down ms-2"/>
            </span>

{/*{            <span onClick={likeTuit} className="col">
                {
                    tuit.liked && <i className="fas fa-heart me-1 wd-red"></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>}*/}

            <div className="col">
                <i className="fas fa-external-link-alt me-2"/>
            </div>
        </div>
);
}
export default TuitStats;