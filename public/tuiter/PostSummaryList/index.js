import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
         <ul class="list-group">
         <li class="list-group-item starship-background font-bold">
            <img src="../images/spaceship.jpg" class="starship-background">
            <div class="starship-text font-bold">SpaceX's Starship</div>
         </li>
         ${
        posts.map(posts => {
            return(PostSummaryItem(posts));
        }).join('')
    }
         </ul>
`); }


export default PostSummaryList;