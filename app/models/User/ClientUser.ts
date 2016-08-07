import{BaseUser} from './BaseUser.ts'

export class ClientUser extends BaseUser {
    rut:String;
    constructor(options: {} = {}) {
        super(options);
    }
}