

const PostSummaryListItem = (post) => {
    console.log(post.image)
    return (`
                 <li class="list-group-item">
                    <div class = "font-small wb-inline-center middle-tab-width">
                        <div class="gray-normal"> ${post.topic} </div>
                        <span class = "font-bold"> ${post.userName}
                            <span class="fa-stack fa-sm">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-check fa-inverse fa-stack-1x"></i>
                            </span>
                            <span class="gray-normal"> - ${post.time} </span>
                        </span>
                        <div class = "font-bold">
                        ${post.title}
                        </div>
                    </div>
                    
                    <img src = ${post.image} class="float-right middle-img">
                </li>
    
`); }

export default PostSummaryListItem;