import React from "react";

function GameDetails() {

    function plotclick(e) {
        console.log(`click ${e.target.id}`);
    }

    return(
        <div className="game-content">
            <h2>Your Farm:</h2>
            <div className="plotbox">
                <div className="locked-plot">
                    <button id="1" onClick={plotclick}>
                        a
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="2" onClick={plotclick}>
                        b
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="3" onClick={plotclick}>
                        c
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="4" onClick={plotclick}>
                        d
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="5" onClick={plotclick}>
                        e
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="6" onClick={plotclick}>
                        f
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="7" onClick={plotclick}>
                        g
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="8" onClick={plotclick}>
                        h
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="9" onClick={plotclick}>
                        i
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="10" onClick={plotclick}>
                        j
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="11" onClick={plotclick}>
                        k
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="12" onClick={plotclick}>
                        l
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="13" onClick={plotclick}>
                        m
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="14" onClick={plotclick}>
                        n
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="15" onClick={plotclick}>
                        o
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="16" onClick={plotclick}>
                        p
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="17" onClick={plotclick}>
                        q
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="18" onClick={plotclick}>
                        r
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="19" onClick={plotclick}>
                        s
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="20" onClick={plotclick}>
                        t
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="21" onClick={plotclick}>
                        u
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="22" onClick={plotclick}>
                        v
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="23" onClick={plotclick}>
                        w
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="24" onClick={plotclick}>
                        x
                        <img src="" alt="" />
                    </button>
                </div>
                <div className="locked-plot">
                    <button id="25" onClick={plotclick}>
                        y
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;