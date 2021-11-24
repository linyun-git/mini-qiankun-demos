import React, {useState} from 'react';

export default function() {
  const [mock, setMock] = useState(window.mock || '');
  const [windowMock, setWindowMock] = useState(window.mock || '');

  const handleClick = () => {
    window.mock = mock;
    setWindowMock(mock);
  }

  return (
    <h2 className="app-nav-item" style={{ borderColor: 'green' }}>
      About
      <div>
        <code>window.mock=</code>
        <input type="text" value={mock} onChange={e => setMock(e.target.value)}/>
        <button onClick={handleClick} disabled={mock === windowMock}>set</button>
      </div>
    </h2>
  );
}
