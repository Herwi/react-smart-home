import React from 'react';
import SmartDeviceDetails from './components/SmartDeviceDetails/SmartDeviceDetails';
import SmartDevicesList from './components/SmartDevicesList/SmartDevicesList';

const App: React.FC = (props) => {
  return (
    <>
      <SmartDevicesList />
      <SmartDeviceDetails />
    </>
  );
}

export default App;
