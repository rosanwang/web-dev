import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {
    // create whatsHappening state variable
    let [whatsHappening, setWhatsHappening]
        = useState('');

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    // handle tuit button click
/*    const tuitClickHandler = () => {
       dispatch({type: 'create-tuit',
       tuit: whatsHappening});
    }*/
    return (
        <>
            <table className="wd-margin-whatshappening">
                <tr>
                    <td className="wd-top-vertical-align">
                        <img src={'../tuiter/images/elon.jpeg'}
                             className="rounded-circle wd-pfp-whatshappening"/>
                    </td>
                    <td className = "wd-full-width">
                        <textarea onChange={(e) =>
                            setNewTuit({
                                ...newTuit,
                                tuit: e.target.value
                            })}
                                  className="form-control wd-textarea"
                                  placeholder="What's happening?"/>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"/></a>
                            <a href="#"><i className="far fa-analytics me-3"/></a>
                            <a href="#"><i className="far fa-smile me-3"/></a>
                            <a href="#"><i className="far fa-calendar me-3"/></a>
                        </span>
                        <button onClick={() => createTuit(dispatch, newTuit)} className="btn btn-primary fa-pull-right rounded-pill">
                            Tuit
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}
export default WhatsHappening;