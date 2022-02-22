import React, { useEffect } from 'react';
import ISmartDevice from '../../types/ISmartDevice';
import { useDispatch, useSelector } from 'react-redux';
import { loadDevicesAsync, connectDevicesRefresher } from '../../redux/reducers/devices/devices.thunks';
import IDevicesReducerState from '../../types/IDevicesReducerState';
import SmartDevice from './SmartDevice';
import Card from '../UI/Card';
import Draggable from '../UI/Draggable';

const SmartDevicesList: React.FC = (props) => {
  const dispatch = useDispatch();
  const devices = useSelector((state: IDevicesReducerState) => state.devices)
  useEffect(() => {
    dispatch(loadDevicesAsync());
    dispatch(connectDevicesRefresher());
  }, [dispatch]);
  return (
    <Card small>
      {devices.map((d: ISmartDevice) => <SmartDevice key={d.id} device={d} />)}
    </Card>
  );
}

export default SmartDevicesList;
