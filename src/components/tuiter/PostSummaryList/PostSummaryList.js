import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (

            <ul className="list-group">
                <li className="list-group-item starship-background font-bold">
                    <img src="../tuiter/images/spaceship.jpg" className="starship-background"/>
                        <div className="starship-text font-bold">SpaceX's Starship</div>
                </li>
                {
                posts.map(posts => {
                    return (<PostSummaryItem post = {posts}/>);
                })
            }
            </ul>


);}


export default PostSummaryList;