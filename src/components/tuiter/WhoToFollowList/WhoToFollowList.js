import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <>
            <li className="list-group-item font-bold">Who to follow</li>
            <li className="list-group">
                {
                    who.map(who => {
                        return (
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </li>
        </>
    );
}

export default WhoToFollowList;