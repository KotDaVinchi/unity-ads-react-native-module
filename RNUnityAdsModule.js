import { NativeModules, NativeEventEmitter, Platform} from 'react-native';

const { RNUnityAdsModule } = NativeModules;

const adsManagerEmitter = new NativeEventEmitter(RNUnityAdsModule);

const eventHandlers = {
    Ready: new Map(),
    Start: new Map(),
    Finish: new Map(),
    Error: new Map(),
};

const addEventListener = (type, handler) => {
    if(Platform.OS === 'android')
    {
        switch (type) {
            case 'Ready':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID); }));
                break;
            case 'Start':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID); }));
                break;
            case 'Finish':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID, event.result); }));
                break;
            case 'Error':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.error, event.message); }));
                break;
            default:
                console.log(`Event with type ${type} does not exist.`);
        }
    }
    else
    {
        switch (type) {
            case 'Ready':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID); }));
                break;
            case 'Start':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID); }));
                break;
            case 'Finish':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.placementID, event.result); }));
                break;
            case 'Error':
                eventHandlers[type].set(handler, adsManagerEmitter.addListener(type, event => { handler(event.error, event.message); }));
                break;
            default:
                console.log(`Event with type ${type} does not exist.`);
        }
    }
}

const removeEventListener = (type, handler) => {

    if (!eventHandlers[type].has(handler)) {
        return;
    }
    eventHandlers[type].get(handler).remove();
    eventHandlers[type].delete(handler);

}

const removeAllListeners = () => {
    if(Platform.OS === 'android')
    {
        adsManagerEmitter.removeAllListeners('Ready');
        adsManagerEmitter.removeAllListeners('Error');
        adsManagerEmitter.removeAllListeners('Start');
        adsManagerEmitter.removeAllListeners('Finish');
    }
    else if(Platform.OS === 'ios')
    {
        adsManagerEmitter.removeAllListeners('Ready');
        adsManagerEmitter.removeAllListeners('Error');
        adsManagerEmitter.removeAllListeners('Start');
        adsManagerEmitter.removeAllListeners('Finish');
    }
};

module.exports = {
    ...RNUnityAdsModule,
    getPlacementState: function getPlacementState(placementID, callback) {
        if (arguments.length === 1) {
            callback = placementID;
            placementID = '';
        }

        RNUnityAdsModule.getPlacementState(placementID, callback);
    },
    isReady: function isReady(placementID, callback) {
        if (arguments.length === 1) {
            callback = placementID;
            placementID = '';
        }

        RNUnityAdsModule.isReady(placementID, callback);
    },
    show: function show(placementID) {
        if (arguments.length === 0) {
            placementID = '';
        }

        RNUnityAdsModule.show(placementID);
    },
    addEventListener,
    removeEventListener,
    removeAllListeners
};
