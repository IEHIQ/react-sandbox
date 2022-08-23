import { useRef, useState } from "react";
import './animationtest.sass';

function AnimationTest() {

    const [blocks, setBlocks] = useState([]);
    const blocksRef = useRef(blocks);

    function addBlock(e) {
        blocksRef.current.forEach(block => {
            console.log(block);
        });

        blocksRef.current = [...blocksRef.current,
            <div className="block">block</div> 
        ];
        setBlocks(blocksRef.current);
    }

    return (
        <div className='anim-test'>
            <div className="controls">
                <div
                    className="controls__button"
                    onClick={addBlock}
                >
                    +
                </div>
            </div>
            <div className="blocks">
                {blocks}
            </div>
        </div>
    );

}

export default AnimationTest;