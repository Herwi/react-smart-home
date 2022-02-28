import React, { ReactElement, MouseEvent } from "react";
import ISmartDevice from "../../types/ISmartDevice";
import classes from "./SmartDevice.module.css";
import {
  MdLightbulb,
  MdElectricalServices,
  MdDeviceThermostat,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  loadDeviceDetailsAsync,
  unloadDeviceDetails,
} from "../../redux/reducers/devices/devices.thunks";
import IDevicesReducerState from "../../types/IDevicesReducerState";
import ISmartDeviceType from "../../types/ISmartDeviceType";
import IConnectionState from "../../types/IConnectionState";

const SmartDevice: React.FC<{ device: ISmartDevice; active: boolean }> = ({
  device,
  active,
}) => {
  const dispatch = useDispatch();
  const deviceDetails = useSelector(
    (state: IDevicesReducerState) => state.deviceDetails
  );
  const isUnloadingDeviceDetails = useSelector(
    (state: IDevicesReducerState) => state.isUnloadingDeviceDetails
  );
  let color: string;
  let icon: ReactElement;

  // lower opacity of icon if device is disconnected
  let iconOpacity =
    device.connectionState === "disconnected" ? ` ${classes.opacity}` : "";

  // class that indicate device connection state by color of right edge
  switch (device.connectionState) {
    case IConnectionState.connected:
      color = classes.connected;
      break;
    case IConnectionState.poorConnection:
      color = classes.poorConnection;
      break;
    case IConnectionState.disconnected:
      color = classes.disconnected;
  }
  // loading proper icon
  switch (device.type) {
    case ISmartDeviceType.bulb:
      icon = <MdLightbulb />;
      break;
    case ISmartDeviceType.temperatureSensor:
      icon = <MdDeviceThermostat />;
      break;
    case ISmartDeviceType.outlet:
      icon = <MdElectricalServices />;
  }

  // loading device details on click or unloading if id is matching with clicked element
  const onClickHandler = (event: MouseEvent) => {
    if (!isUnloadingDeviceDetails) {
      if (deviceDetails && deviceDetails.id === device.id) {
        dispatch(unloadDeviceDetails());
      } else {
        dispatch(loadDeviceDetailsAsync(device.id));
      }
    }
  };
  // cursor on hover when unloading deviceDetails
  const blocked = isUnloadingDeviceDetails ? ` ${classes.blocked}` : "";
  // active device details indicator
  const activeStyling =
    active && !isUnloadingDeviceDetails ? ` ${classes.bold}` : "";

  return (
    <div className={classes.outer} onClick={onClickHandler}>
      <div className={`${classes.device} ${color} ${blocked}`}>
        <div className={`${classes.icon}${iconOpacity}`}>{icon}</div>
        <div className={`${classes.name} ${activeStyling}`}>{device.name}</div>
      </div>
    </div>
  );
};

export default SmartDevice;
