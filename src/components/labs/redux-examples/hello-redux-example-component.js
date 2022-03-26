import React from "react";
import {useSelector} from "react-redux"; // import useSelector hook

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message); // extract 'Hello World' from reducer
    return(
        <h1>{message}</h1> // render <h1> Hello World <h1>
    );
};

export default HelloReduxExampleComponent;