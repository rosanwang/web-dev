import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Tuiter = () => {
    return(
        <>
            <ExploreScreen/>
            <div>
                <Link to="/hello">
                    Hello
                </Link> |
                <Link to="/">
                    Labs
                </Link>
            </div>

        </>
    )
};

export default Tuiter;