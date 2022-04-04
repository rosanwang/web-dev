import React from "react";
import HelloReduxExampleComponent             // import the component that consumes the data
    from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {createStore, combineReducers} from "redux";            // import createStore to store data from reducers
import {Provider} from "react-redux";         // import Provider to deliver the data to store in child elements
import Todos from "./reducers/todos-component"

const reducers = combineReducers({hello, todos})

const store = createStore(reducers);             // create data storage

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;