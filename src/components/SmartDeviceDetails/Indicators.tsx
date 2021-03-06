import React, { ReactElement } from "react";
import ISmartDeviceDetails from "../../types/ISmartDeviceDetails";
import ISmartBulb from "../../types/ISmartBulb";
import ISmartOutlet from "../../types/ISmartOutlet";
import {
  MdSignalWifi4Bar,
  MdSignalWifiStatusbarConnectedNoInternet2,
  MdSignalWifiConnectedNoInternet0,
  MdLightbulb,
  MdElectricalServices,
  MdDeviceThermostat,
  MdToggleOff,
  MdToggleOn,
} from "react-icons/md";
import Indicator from "./Indicator";
import ISmartDeviceType from "../../types/ISmartDeviceType";
import IConnectionState from "../../types/IConnectionState";
import classes from "./Indicators.module.css";

const Indicators: React.FC<{ device: ISmartDeviceDetails }> = ({ device }) => {
  interface indicator {
    icon: ReactElement;
    opacity?: boolean;
  }
  const indicators: indicator[] = [];

  const generateStateIndicator: (
    device: ISmartBulb | ISmartOutlet
  ) => indicator = (device) => {
    if (device.isTurnedOn) {
      return {
        icon: <MdToggleOn />,
      };
    }
    return {
      icon: <MdToggleOff />,
      opacity: true,
    };
  };

  switch (device.type) {
    case ISmartDeviceType.bulb:
      indicators.push({
        icon: <MdLightbulb />,
      });
      indicators.push(generateStateIndicator(device as ISmartBulb));
      break;
    case ISmartDeviceType.outlet:
      indicators.push({
        icon: <MdElectricalServices />,
      });
      indicators.push(generateStateIndicator(device as ISmartOutlet));
      break;
    case ISmartDeviceType.temperatureSensor:
      indicators.push({
        icon: <MdDeviceThermostat />,
      });
      break;
  }

  switch (device.connectionState) {
    case IConnectionState.connected:
      indicators.push({
        icon: <MdSignalWifi4Bar />,
      });
      break;
    case IConnectionState.poorConnection:
      indicators.push({
        icon: <MdSignalWifiStatusbarConnectedNoInternet2 />,
      });
      break;
    case IConnectionState.disconnected:
      indicators.push({
        icon: <MdSignalWifiConnectedNoInternet0 />,
        opacity: true,
      });
      break;
  }

  return (
    <div className={classes.indicators}>
      {indicators.map(({ icon, opacity }) => (
        <Indicator icon={icon} opacity={opacity} />
      ))}
    </div>
  );
};

export default Indicators;
