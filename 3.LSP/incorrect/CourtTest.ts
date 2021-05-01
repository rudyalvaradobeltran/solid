import { WimbledonCourt } from './WimbledonCourt';
import { RolandGarrosCourt } from './RolandGarrosCourt';
import { AustraliaOpenCourt } from './AustraliaOpenCourt';
import { Court } from "./Court";

export class CourtTest {
    testCourt(){
        let courts: Array<Court> = [];
        courts.push(new WimbledonCourt());
        courts.push(new AustraliaOpenCourt());
        courts.push(new RolandGarrosCourt());
        courts.map((court: Court) => {
            court.cutGrass();
        });
    }
}