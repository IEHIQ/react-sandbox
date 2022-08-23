import React, { useState } from "react";
import './imagedrop.css';
import clsx from "clsx";

function ImageDrop(props) {

    const [data, setData] = useState(props.data || null);
    const [imgURL, setImgURL] = useState(props.imgURL || '');
    const [prompt, setPrompt] = useState(props.prompt || 'Drop your image here');

    const [hidden, setHidden] = useState(true);
    const types = ['jpg', 'jpeg', 'png'];

    const [removing, setRemoving] = useState(false);
    const [cursorIn, setCursorIn] = useState(false);

    function resetPrompt() {
        setPrompt(props.prompt || 'Drop your image here');
    }

    function handleDataChange(newdata) {
        setData(newdata);
        if (props.onDataChange)
            props.onDataChange(newdata);
    }

    function typeCheck(mimetype) {
        if(!types)
            return true;
        
        let type = mimetype.substr(mimetype.indexOf('/') + 1);
        let i = 0;
        let len = types.length;
        while(i < len && type !== types[i])
            i++;
        return i < len;
    }

    function handleDrop(e) {
        e.preventDefault();

        if (e.dataTransfer.files && !removing) {
            if (typeCheck(e.dataTransfer.files[0].type)) {
                const img = e.dataTransfer.files[0];
                console.log(img);
                setImgURL(URL.createObjectURL(img));
                setHidden(false);
            }
            else {
                setPrompt('Not an image');
                setTimeout(resetPrompt, 2000);
            }
        }
        else if (!e.dataTransfer.files) {
            setPrompt('Not a file');
            setTimeout(resetPrompt, 2000);
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDragStart(e) {
        setRemoving(true);
    }

    function handleDragEnd(e) {
        if (!cursorIn) {
            setHidden(true);
            setImgURL('');
            console.log('Pic trashed');
        }
        else
            console.log('Cursor was in');
            setRemoving(false);
    }

    function handleDragEnter(e) {
        console.log('Drag entered');
        setCursorIn(true);
    }

    function handleDragLeave(e) {
        console.log('Drag left');
        setCursorIn(false);
    }

    return (
        <div
            className={clsx('image-dropzone', !imgURL && 'empty')}
            onDrop={ handleDrop }
            onDragOver={ handleDragOver }

            onDragStart={ handleDragStart }
            onDragEnd={ handleDragEnd }
            onDragEnter={ handleDragEnter }
            onDragLeave={ handleDragLeave }
        >
            <p 
                className={ clsx('prompt', !hidden && 'hidden') }
            >
                { prompt }
            </p>
            <img 
                className={ clsx('image', hidden && 'hidden') }
                src={ imgURL }
            >

            </img>
        </div>
    );
}

export default ImageDrop;