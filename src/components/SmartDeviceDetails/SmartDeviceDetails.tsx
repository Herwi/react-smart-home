import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "../UI/Card";
import Draggable from "../UI/Draggable";
import IDevicesReducerState from '../../types/IDevicesReducerState';
import SmartBulbDetails from './SmartBulbDetails';
import ISmartBulb from '../../types/ISmartBulb';
import SmartOutletDetails from './SmartOutletDetails';
import ISmartOutlet from '../../types/ISmartOutlet';
import SmartTemperatureSensorDetails from './SmartTemperatureSensorDetails';
import ISmartTemperatureSensor from '../../types/ISmartTemperatureSensor';

const SmartDeviceDetails = () => {
    const dispatch = useDispatch();
    const deviceDetails = useSelector((state: IDevicesReducerState) => state.deviceDetails);

    let details: ReactElement | null = null;

    if (deviceDetails) {
        switch (deviceDetails.type) {
            case 'bulb':
                details = <SmartBulbDetails device={deviceDetails as ISmartBulb} />
                break;
            case 'outlet':
                details = <SmartOutletDetails
                    device={deviceDetails as ISmartOutlet}
                />
                break;
            case 'temperatureSensor':
                details = <SmartTemperatureSensorDetails
                    device={deviceDetails as ISmartTemperatureSensor}
                />
                break;
            default:
                break;
        }
        if(details) {
            return (
                <Draggable>
                    <Card>
                        {details}
                    </Card>
                </Draggable>
            );
        }
        return <></>;
    }
    return <></>;
};

export default SmartDeviceDetails;