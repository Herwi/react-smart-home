import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import Card from "../UI/Card";
import Draggable from "../UI/Draggable";
import IDevicesReducerState from '../../types/IDevicesReducerState';
import DetailsBulb from './DetailsBulb';
import ISmartBulb from '../../types/ISmartBulb';
import DetailsOutlet from './DetailsOutlet';
import ISmartOutlet from '../../types/ISmartOutlet';
import DetailsTemperatureSensor from './DetailsTemperatureSensor';
import ISmartTemperatureSensor from '../../types/ISmartTemperatureSensor';
import classes from './SmartDeviceDetails.module.css';
import Indicators from './Indicators';

const SmartDeviceDetails = () => {
    const deviceDetails = useSelector((state: IDevicesReducerState) => state.deviceDetails);
    const isUnloadingDeviceDetails = useSelector((state: IDevicesReducerState) => state.isUnloadingDeviceDetails);

    let details: ReactElement | null = null;

    if (deviceDetails) {
        // rendering proper component
        switch (deviceDetails.type) {
            case 'bulb':
                details = <DetailsBulb
                    device={deviceDetails as ISmartBulb}
                />
                break;
            case 'outlet':
                details = <DetailsOutlet
                    device={deviceDetails as ISmartOutlet}
                />
                break;
            case 'temperatureSensor':
                details = <DetailsTemperatureSensor
                    device={deviceDetails as ISmartTemperatureSensor}
                />
                break;
            default:
                break;
        }
        // if deviceDetails exists render component, otherwise just render empty mark
        if (details) {
            return (
                <Draggable resizable beforeHide={isUnloadingDeviceDetails}>
                    <Card fill>
                        <div className={classes.inner}>
                            <div className={classes.title}>{deviceDetails.name}</div>
                            <Indicators device={deviceDetails}/>
                            {details}
                        </div>
                    </Card>
                </Draggable>
            );
        }
        return <></>;
    }
    return <></>;
};

export default SmartDeviceDetails;