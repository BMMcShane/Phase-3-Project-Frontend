import React, {useState} from "react";
import Tutorial from "./Tutorial";
import Plantopedia from "./Plantopedia";


function MiscBox() {
    const [box, setBox] = useState(true)

    function handleMiscChange(value) {
       setBox(value);
       console.log(box)
       handleReturn(box);
    };

    function handleReturn(box) {
        return (box ? <Tutorial /> : <Plantopedia />);
    }

    return (
        <div id="misc-box-total">
            <div id="misc-box-navbar">
                <button className="misc-box-btn" onClick={() => handleMiscChange(true)}>
                    <h3>Guide</h3>
                </button>
                <button className="misc-box-btn" onClick={() => handleMiscChange(false)}>
                    <h3>Plants</h3>
                </button>
            </div>

            <br />
            {handleReturn(box)}
            

        </div>
    );
}

export default MiscBox;