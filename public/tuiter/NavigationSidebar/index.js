const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <i class="fab fa-twitter list-group-item"></i>
                <i class="fas fa-home list-group-item d-xl-none"></i>
                <i class="fas fa-hashtag list-group-item d-xl-none active"></i>
                <i class="fas fa-bell list-group-item d-xl-none"></i>
                <i class="fas fa-envelope list-group-item d-xl-none"></i>
                <i class="fas fa-bookmark list-group-item d-xl-none"></i>
                <i class="fas fa-list list-group-item d-xl-none"></i>
                <i class="fas fa-user list-group-item d-xl-none"></i>
                <div class="list-group-item d-xl-none ps-1">
                    <span class="fa-stack float-left">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                    </span>
                </div>

                <a href = "#" class="list-group-item d-xl-block d-none"> <i class="fas fa-home"></i> Home </a>
                <a href = "#" class="list-group-item active d-xl-block d-none"><i class="fas fa-hashtag"></i> Explore</a>
                <a href = "#" class="list-group-item d-xl-block d-none"><i class="fas fa-bell"></i> Notifications</a>
                <a href = "#" class="list-group-item d-xl-block d-none"><i class="fas fa-envelope"></i>  Messages</a>
                <a href = "#" class="list-group-item d-xl-block d-none"><i class="fas fa-bookmark"></i>  Bookmarks</a>
                <a href = "#" class="list-group-item d-xl-block d-none"><i class="fas fa-list"></i>  Lists</a>
                <a href = "#" class="list-group-item d-xl-block d-none"><i class="fas fa-user"></i> Profile</a>
                
                <a href = "#" class="list-group-item d-xl-block d-none">
                <span class="fa-stack fa-sm  p-0">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-inverse fa-stack-1x"></i>
                </span> More

    
                </a>
            </div>

            <button class="btn btn-primary col-xl-12 rounded-corners mt-2"> Tweet </button>

    `);
}
export default NavigationSidebar;
