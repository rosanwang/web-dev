import React from "react";

const WhoToFollowListItem = ({
                               who = {   avatarIcon: '../tuiter/images/java.jpg',
                                   userName: 'Java',
                                   handle: 'Java', }
                             }) => {

    return(
                    <li className="list-group-item">
                    <img src = {who.avatarIcon} class="icon-pic wb-inline"/>
                    <div className = "font-small wb-inline-center follow-width no-wrap">
                        <span className = "font-bold">
                         {who.userName}
                            <span className ="fa-stack fa-sm">
                                <i className ="fas fa-circle fa-stack-2x"></i>
                                <i className ="fas fa-check fa-inverse fa-stack-1x"></i>
                            </span>
                        </span>
                        <div>
                        @{who.handle}
                        </div>
                    </div>
                    <button className ="btn btn-primary rounded-corners float-right"> Follow </button>
                </li>
    );
}

export default WhoToFollowListItem;