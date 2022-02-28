import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <li class="list-group-item font-bold">Who to follow</li>
            <li class="list-group">
               ${
                who.map(who => {
                  return(WhoToFollowListItem(who));
                }).join('')}

            <!-- continue here -->
            </li>

`); }


export default WhoToFollowList;