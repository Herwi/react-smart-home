import React from 'react';
import SmartDevice from './types/SmartDevice';
import SmartBulb from './types/SmartBulb';

const App: React.FC = (props) => {
  const arr: SmartDevice[] = [
    new SmartBulb("1", "Kitchen lamp", "connected", true, 100, "#cccccc")
    ]
    console.log((arr[0] as SmartBulb).color)
  return (
    <div>
      
    </div>
  );
}

export default App;
