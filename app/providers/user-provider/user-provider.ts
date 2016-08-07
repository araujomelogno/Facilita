import { Injectable } from '@angular/core';
import { BaseUser }  from '../../models/User/BaseUser';
 
@Injectable()
export class UserProvider {
  loogedUser: BaseUser;
  constructor() { 
  }



}

