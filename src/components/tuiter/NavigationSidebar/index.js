import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
        <>
            <div className="list-group">
                <i className="fab fa-twitter list-group-item"/>
                <i className="fas fa-home list-group-item d-xl-none"/>
                <i className="fas fa-hashtag list-group-item d-xl-none active"/>
                <i className="fas fa-bell list-group-item d-xl-none"/>
                <i className="fas fa-envelope list-group-item d-xl-none"/>
                <i className="fas fa-bookmark list-group-item d-xl-none"/>
                <i className="fas fa-list list-group-item d-xl-none"/>
                <i className="fas fa-user list-group-item d-xl-none"/>
                <div className="list-group-item d-xl-none ps-1">
                    <span className="fa-stack float-left">
                        <i className="fas fa-circle fa-stack-1x"/>
                        <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"/>
                    </span>
                </div>

                <a href="#" className="list-group-item d-xl-block d-none"> <i className="fas fa-home"/> Home </a>
                <a href="#" className="list-group-item active d-xl-block d-none"><i
    className="fas fa-hashtag"/> Explore</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-bell"/> Notifications</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i
    className="fas fa-envelope"/> Messages</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-bookmark"/> Bookmarks</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-list"/> Lists</a>
                <a href="#" className="list-group-item d-xl-block d-none"><i className="fas fa-user"/> Profile</a>

                <a href="#" className="list-group-item d-xl-block d-none">
                <span className="fa-stack fa-sm  p-0">
                    <i className="fas fa-circle fa-stack-2x"/>
                    <i className="fas fa-ellipsis-h fa-inverse fa-stack-1x"/>
                </span> More
                </a>
            </div>
            <button className="btn btn-primary col-xl-12 rounded-corners mt-2"> Tweet</button>
        </>
    );
}
export default NavigationSidebar;
