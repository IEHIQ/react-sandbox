import React, { useState } from "react";
import './dropzone.css';

function DropZone(props) {

    const [data, setData] = useState(props.data || null);
    const types = props.types;
    const maxFiles = props.maxFiles || 1;

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
        console.log('File(s) dropped');

        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();

        if (e.dataTransfer.items) {
            let length = e.dataTransfer.items.length;
            if (length > maxFiles)
                length = maxFiles;
            // Use DataTransferItemList interface to access the file(s)
            for (let i = 0; i < length; i++) {
                // If dropped items aren't files, reject them
                if (e.dataTransfer.items[i].kind === 'file') {
                    const file = e.dataTransfer.items[i].getAsFile();
                    console.log(`Filetype - ${file.type}`);
                    console.log(`Typecheck - ${typeCheck(file.type)}`);
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (let i = 0; i < e.dataTransfer.files.length; i++) {
                console.log(`… file[${i}].name = ${e.dataTransfer.files[i].name}`);
            }
        }
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    return (
        <div
            className="dropzone"
            onDrop={ handleDrop }
            onDragOver={ handleDragOver }
        >
            <p className="prompt">Drop your stuffz here!</p>
        </div>
    );
}

export default DropZone;