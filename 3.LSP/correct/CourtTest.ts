import { ChileOpen } from './ChileOpen';
import { GrassCourt } from './GrassCourt';
import { WimbledonCourt } from './WimbledonCourt';

export class CourtTest {
    testCourt(){
        let grassCourts: Array<GrassCourt> = [];
        grassCourts.push(new WimbledonCourt());
        grassCourts.push(new ChileOpen());
        grassCourts.map((grassCourt: GrassCourt) => {
            grassCourt.cutGrass();
        });
    }
}