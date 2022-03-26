import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    // create whatsHappening state variable
    let [whatsHappening, setWhatsHappening]
        = useState('');

    const dispatch = useDispatch();

    // handle tuit button click
    const tuitClickHandler = () => {
       dispatch({type: 'create-tuit',
       tuit: whatsHappening});
    }
    return (
        <>
            <table className="wd-margin-whatshappening">
                <tr>
                    <td className="wd-top-vertical-align">
                        <img src={'../tuiter/images/elon.jpeg'}
                             className="rounded-circle wd-pfp-whatshappening"/>
                    </td>
                    <td className = "wd-full-width">
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control wd-textarea"
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tuitClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}
export default WhatsHappening;