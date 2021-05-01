import { GrassCourt } from './GrassCourt';
import { Court } from './Court';

export class ChileOpen extends Court implements GrassCourt {
    cutGrass(): void {
        console.log('Cutting grass in Chile Open');
    }
}