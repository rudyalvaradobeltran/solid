import { ClayCourt } from './ClayCourt';
import { Court } from "./Court";

export class RolandGarrosCourt extends Court implements ClayCourt {
    changeClay(): void {
        
    }
    cutClass(): void {
        console.log('test');
    }
}