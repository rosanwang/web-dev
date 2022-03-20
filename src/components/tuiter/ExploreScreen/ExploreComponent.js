import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div>
                <div className="search-bar">
                    <i className="fas fa-search"> </i>
                    <input type="text" placeholder="Search Twitter"
                           className="indent float-left max-width rounded-corners search-bar-border"/>
                </div>
                <i className="fa fa-cog blue fa-2x gear-icon"></i>
            </div>

            <ul className="nav nav-tabs tab-format pb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-md-block d-none" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
            <PostSummaryList/>
        </>
    );
}

export default ExploreComponent;
