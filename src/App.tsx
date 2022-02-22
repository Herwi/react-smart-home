import React, { useEffect } from 'react';
import SmartDevice from './types/SmartDevice';
import { useDispatch, useSelector } from 'react-redux';
import { loadDevicesAsync, connectDevicesRefresher } from './redux/reducers/devices/devices.thunks';
import IDevicesReducerState from './types/IDevicesReducerState';

const App: React.FC = (props) => {
  const dispatch = useDispatch();
  const devices = useSelector((state: IDevicesReducerState) => state.devices)
  useEffect(() => {
    dispatch(loadDevicesAsync());
    dispatch(connectDevicesRefresher());
  }, [dispatch]);
  return (
    <div>
      {devices.map((d: SmartDevice) => <div key={d.id}>{d.id} - {d.name} - {d.type} - {d.connectionState}</div>)}
    </div>
  );
}

export default App;
