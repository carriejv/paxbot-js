import {Technician, Interpret} from 'technician'
import {EnvConfigSource} from '@technician/env-config-source';

const technician = new Technician(Interpret.asText('utf8'));
const envSource = new EnvConfigSource();
technician.addSource([{
    source: envSource,
    ignoreIf: () => process.env.NODE_ENV !== 'production'
}]);

export function tech(){
    return technician
}