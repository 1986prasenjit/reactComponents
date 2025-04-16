import React, { useState } from 'react'
import SpeedDail from './SpeedDail';

function SpeedDialPosi() {
    const [position, setPosition] = useState('right');
    const positions = ['top', 'bottom', 'left', 'right'];
  return (
    <div>
      {/* Position Controls */}
      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2 uppercase text-center">Select Speed Dial Position</h1>
        <div className="flex gap-4 justify-center">
          {positions.map((pos) => (
            <label key={pos} className="flex items-center space-x-2">
              <input 
                type="radio" 
                name="position" 
                value={pos} 
                checked={position === pos}
                onChange={(e) => setPosition(e.target.value)}
              />
              <span className="capitalize flex items-center justify-center">{pos}</span>
            </label>
          ))}
        </div>
      </div>
      {/* Render Speed Dial with the selected position */}
      <SpeedDail position={position} />
    </div>
  )
}

export default SpeedDialPosi;