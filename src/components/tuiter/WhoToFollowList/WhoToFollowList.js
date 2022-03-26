import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <div>
                <li className="list-group-item font-bold">Who to follow</li>
                    {
                        who.map(who => {
                            return (
                                <WhoToFollowListItem who={who}/>
                            );
                        })
                    }
        </div>
    );
}

export default WhoToFollowList;