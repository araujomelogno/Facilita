import{BaseUser} from './BaseUser.ts'

export class ProviderUser extends BaseUser {
    serviceDescription:string;
    constructor(options: {} = {}) {
        super(options);
    }
}