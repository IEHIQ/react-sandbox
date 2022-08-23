import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import './animotext.sass';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere sollicitudin dapibus. Vestibulum vitae erat purus. Pellentesque id semper diam. Duis efficitur, leo at sagittis pellentesque, dolor libero consequat sapien, in facilisis metus purus eget elit. Nulla facilisi. Praesent volutpat sed mi nec tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices dignissim lacus sed dignissim. Suspendisse commodo scelerisque dui non molestie.';

function AnimoText(props) {

    const [text, setText] = useState([]);

    const textRef = useRef(text);

    const revealTime = .25;

    function addWord(word, index) {
        textRef.current = [...textRef.current, 
            <span className="word" key={`word#${index}`}> {word}</span>];
        setText(textRef.current);
    }

    useEffect(() => {
        let words = LOREM.split(/ /);
        let len = words.length;
        
        let time = 0;

        console.log(words, len);

        for (let i = 0; i < len; i++) {
            time += Math.ceil(Math.random() * revealTime * 1000);
            setTimeout(()=>{
                addWord(words[i], i);
            }, time);
        }
    }, []);


    return (
        <div className="animo-text">
            {text}
        </div>
    );
}

export default AnimoText;