import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <i className="fab fa-twitter list-group-item"></i>
                <i className="fas fa-home list-group-item d-xl-none"></i>
                <i className="fas fa-hashtag list-group-item d-xl-none active"></i>
                <i className="fas fa-bell list-group-item d-xl-none"></i>
                <i className="fas fa-envelope list-group-item d-xl-none"></i>
                <i className="fas fa-bookmark list-group-item d-xl-none"></i>
                <i className="fas fa-list list-group-item d-xl-none"></i>
                <i className="fas fa-user list-group-item d-xl-none"></i>
                <div className="list-group-item d-xl-none ps-1">
                    <span className="fa-stack float-left">
                        <i className="fas fa-circle fa-stack-1x"></i>
                        <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                    </span>
                </div>

                <a href="#" className="list-group-item d-xl-block d-none"> <i className="fas fa-home"></i> Home </a>
                <a href="#" className="list-group-item active d-xl-block d-none"><i
                    className="fas fa-hashtag"></i> Explore</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-bell"></i> Notifications</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i
                    className="fas fa-envelope"></i> Messages</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-bookmark"></i> Bookmarks</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-list"></i> Lists</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-user"></i> Profile</a>

                <a href="#" className="list-group-item d-xl-block d-none">
                <span className="fa-stack fa-sm  p-0">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                </span> More
                </a>
            </div>
            <button className="btn btn-primary col-xl-12 rounded-corners mt-2"> Tweet</button>
        </>
    );
}
export default NavigationSidebar;
