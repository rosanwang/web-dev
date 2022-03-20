import React from "react";


const PostSummaryListItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../tuiter/images/react.jpg"
    }
}) => {

    return (
        <>
            <li className="list-group-item">
                <div className="font-small wb-inline-center middle-tab-width">
                    <div className="gray-normal"> {post.topic} </div>
                    <span className="font-bold"> {post.userName}
                        <span className="fa-stack fa-sm">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-check fa-inverse fa-stack-1x"></i>
                            </span>
                            <span className="gray-normal"> - {post.time} </span>
                        </span>
                    <div className="font-bold">
                        {post.title}
                    </div>
                </div>

                <img src={post.image} className="float-right middle-img"/>
            </li>
        </>
    );
}

export default PostSummaryListItem;