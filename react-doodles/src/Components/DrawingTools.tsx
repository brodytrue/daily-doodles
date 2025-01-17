/**
 * @file DrawingTools.tsx
 * @description Contains functionality and format for the color picker,
 * line width slider, undo button, and clear button
 * Styled from Canvas.css
 */

import React from "react";
import "../Styles/Canvas.css";

/**
 * @interface DrawingToolsProps
 * @description Dynamic properties for all tools
 * @property {number} lineWidth - Controls line width, read from slider
 * @property {string} color - Hexcode value selected from color picker, changes line color
 * @property {(color: string) => void} onColorChange - Listens for color changes
 * @property {(width: number) => void} onLineWidthChange - Listens for slider change
 * @property {() => void} onClearCanvas - Listens for clear button press
 * @property {() => void} onUndo - Listens for undo button press
 * @property {() => void} onSaveCanvas - Listens for save button press
 * @property {() => void} onPostClick - Listens for post button press
 * @property {() => void} onProfilePic
 */
interface DrawingToolsProps {
  lineWidth: number;
  color: string;
  onColorChange: (color: string) => void;
  onLineWidthChange: (width: number) => void;
  onClearCanvas: () => void;
  onUndo: () => void;
  onSaveCanvas: () => void;
  onPostClick: () => void;
  onProfilePic: ()=> void;
}

/**
 * @function DrawingTools
 * @description Functional component for drawing tools including color picker,
 * line width slider, undo button, clear button, save button, and post button.
 * @param {DrawingToolsProps} props - Drawing tools properties
 * @returns {JSX.Element} JSX element representing the drawing tools
 */
const DrawingTools: React.FC<DrawingToolsProps> = ({
  lineWidth,
  color,
  onColorChange,
  onLineWidthChange,
  onClearCanvas,
  onUndo,
  onSaveCanvas,
  onPostClick,
  onProfilePic
}) => {
  const handleLineWidthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLineWidth = parseInt(e.target.value);
    onLineWidthChange(newLineWidth);
  };

  return (
    // All tools in one container "tools-container"
    <div className="tools-container">
      <div className="canvas-tools colorPick">
        {/* Color picker */}
        <label htmlFor="colorPicker">Choose Color: </label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
        />
      </div>
      <div className="canvas-tools slider">
        {/* Line width slider */}
        <label htmlFor="lineWidthSlider">Line Width: </label>
        <input
          type="range"
          id="lineWidthSlider"
          min="1"
          max="60"
          value={lineWidth}
          onChange={(e) => onLineWidthChange(parseInt(e.target.value))}
        />
      </div>
      <div className="canvas-tools">
        {/* Line width input field */}
        <input
          type="number"
          id="lineWidthInput"
          min="1"
          max="60"
          value={lineWidth}
          onChange={handleLineWidthInputChange}
          style={{width: "30px", height: "8px"}}
        />
      </div>
      <div className="canvas-tools">
        {/* Buttons for undo, clear, save, and post */}
        <button className="drawingToolButton first" onClick={onUndo}>Undo</button>
        <button className="drawingToolButton first" onClick={onClearCanvas}>Clear</button>
        <button className="drawingToolButton two" onClick={onSaveCanvas}>Save</button>
        <button className="drawingToolButton two" onClick={onPostClick}>Post!</button>
        <button className="drawingToolButton three" onClick={onProfilePic}>Change Profile Pic</button>
      </div>
    </div>
  );
};

export default DrawingTools;

