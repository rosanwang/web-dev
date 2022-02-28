import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`

            <div>
                <div class = "search-bar">
                    <i class="fas fa-search"> </i>
                    <input type="text" placeholder="Search Twitter" class = "indent float-left max-width rounded-corners search-bar-border">
                </div>
                <i class="fa fa-cog blue fa-2x gear-icon"></i>
            </div>
   
           <ul class="nav nav-tabs tab-format pb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-md-block d-none" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
