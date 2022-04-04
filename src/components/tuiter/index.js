import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import NavigationSidebar from "./NavigationSidebar/";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList"

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);

const Tuiter = () => {
    let [active, setActive]
        = useState("/tuiter");

    useEffect(() => {
        setActive(window.location.pathname)
    })

    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={active}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
};

export default Tuiter;