import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

function Text() {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double click to edit");
    const inputRef = useRef(null);  // Add ref for the input element

    const handleDoubleClick = () => {
        setEditMode(true);
    };

    const handleBlur = () => {
        setEditMode(false);
    };

    // When `editMode` changes to true, we need to focus and select the input text
    React.useEffect(() => {
        if (editMode && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editMode]);

    return (
        <Draggable>
            <div className="draggable">
                {editMode ? (
                    <input
                        ref={inputRef}  // Attach ref to the input element
                        className="meme-input"
                        value={val}
                        onChange={e => setVal(e.target.value)}
                        onBlur={handleBlur}
                        autoFocus
                    />
                ) : (
                    <h3 className="meme-text" onDoubleClick={handleDoubleClick}>
                        {val}
                    </h3>
                )}
            </div>
        </Draggable>
    );
}

export default Text;
