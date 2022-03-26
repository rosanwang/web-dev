import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";

const TuitListItem = ({
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
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return (
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tuit.logo_image}/>
                    </td>
                    <td className="ps-3 wd-full-width">

                        <span className="fw-bold">{tuit.postedBy.username}</span>
                        {tuit.verified && <i className="fas fa-badge-check "></i>}
                        <span className="ms-1 text-secondary">@{tuit.handle}</span>
                        <span>
                            <i onClick={() => deleteTuit(tuit)} className="fas fa-remove fa-2x  fa-pull-right "/>
                        </span>

                        <div>
                            {tuit.tuit}
                        </div>
                        {
                            tuit.attachments && tuit.attachments.image &&
                            <img src={tuit.attachments.image}
                                 className="mt-2 wd-border-radius-20px wd-full-width"/>
                        }
                        {
                            tuit.attachments && tuit.attachments.video &&
                            <iframe width="100%" height="350px"
                                    className="mt-2 wd-border-radius-20px wd-full-width"
                                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        {/*{JSON.stringify(tweet)}*/}
                        <TuitStats key={tuit._id} tuit={tuit}/>
                    </td>
                </tr>
            </table>

        </li>
    );
}

export default TuitListItem;