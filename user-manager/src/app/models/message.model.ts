import {Users} from './users.model';
import {Action} from './action.model';

export interface Message {
    from?: Users;
    content?: any;
    action?: Action;
}