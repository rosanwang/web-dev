
const WhoToFollowListItem = (who) => {
    //let name = "@".concat(${who.handle});
    return(`
                    <li class="list-group-item">
                    <img src = ${who.avatarIcon} class="icon-pic wb-inline"/>
                    <div class = "font-small wb-inline-center follow-width no-wrap">
                        <span class = "font-bold">
                         ${who.userName}
                            <span class="fa-stack fa-sm">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-check fa-inverse fa-stack-1x"></i>
                            </span>
                        </span>
                        <div>
                        @${who.handle}
                        </div>
                    </div>
                    <button class="btn btn-primary rounded-corners float-right"> Follow </button>
                </li>
    
    
    `);
}

export default WhoToFollowListItem;