import { Court } from './Court';
import { GrassCourt } from './GrassCourt';

export class WimbledonCourt extends Court implements GrassCourt {
    cutGrass(): void {
        console.log('Cutting grass in Wimbledon');
    }
}