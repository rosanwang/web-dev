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
                <i className="far fa-comment me-2"></i>
                {tuit.stats.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.stats.retuits}
            </span>
            <span onClick={likeTuit} className="col">
                {
                    tuit.liked && <i className="fas fa-heart me-1 wd-red"></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>

            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>
        </div>
);
}
export default TuitStats;