import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row pt-3">
        <div class="col-xl-2 col-lg-1 col-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-xl-6 col-lg-7 col-10">
            ${ExploreComponent()}
        </div>

        <div class="col-lg-4 d-lg-block d-none">
             ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);




