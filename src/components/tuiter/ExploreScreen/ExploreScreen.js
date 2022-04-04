import React from "react";
import NavigationSidebar from "../NavigationSidebar/";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
import ExploreComponent from "./ExploreComponent";

const ExploreScreen = () => {
    return (
        <>
            <div className="row pt-3">
                <div className="col-xl-2 col-lg-1 col-2">
                    <NavigationSidebar/>
                </div>

                <div className="col-xl-6 col-lg-7 col-10">
                    <ExploreComponent/>
                </div>

                <div className="col-lg-4 d-lg-block d-none">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
}

export default ExploreScreen;




