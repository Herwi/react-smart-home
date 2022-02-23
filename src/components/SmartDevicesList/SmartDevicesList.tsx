import React, { useEffect } from 'react';
import ISmartDevice from '../../types/ISmartDevice';
import { useDispatch, useSelector } from 'react-redux';
import { loadDevicesAsync, connectDevicesRefresher } from '../../redux/reducers/devices/devices.thunks';
import IDevicesReducerState from '../../types/IDevicesReducerState';
import SmartDevice from './SmartDevice';
import Card from '../UI/Card';

const SmartDevicesList: React.FC = (props) => {
  const dispatch = useDispatch();
  const devices = useSelector((state: IDevicesReducerState) => state.devices)
  const deviceDetails = useSelector((state: IDevicesReducerState) => state.deviceDetails)

  // loading SmartDevices list and connecting to refresher socket
  useEffect(() => {
    dispatch(loadDevicesAsync());
    dispatch(connectDevicesRefresher());
  }, [dispatch]);
  
  return (
    <Card
      small
      center
      fixedWidth>
      {devices.map((d: ISmartDevice) => <SmartDevice
        key={d.id}
        device={d}
        active={deviceDetails !== null && deviceDetails.id === d.id}
      />
      )}
    </Card>
  );
}

export default SmartDevicesList;
