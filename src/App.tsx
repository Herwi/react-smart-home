import React, { useEffect } from 'react';
import SmartDevice from './types/SmartDevice';
import SmartBulb from './types/SmartBulb';
import { useDispatch, useSelector } from 'react-redux';
import { loadDevicesAsync } from './redux/reducers/devices/devices.thunks';
import IDevicesReducerState from './types/IDevicesReducerState';

const App: React.FC = (props) => {
  const dispatch = useDispatch();
  const devices = useSelector((state: IDevicesReducerState) => state.devices)
  useEffect(() => {
    dispatch(loadDevicesAsync());
  }, [])
  const arr: SmartDevice[] = [
    new SmartBulb("1", "Kitchen lamp", "connected", true, 100, "#cccccc")
  ]
  console.log((arr[0] as SmartBulb).color)
  return (
    <div>
      {devices.map((d: SmartDevice) => <div>{d.id} - {d.name} - {d.type}</div>)}
    </div>
  );
}

export default App;
