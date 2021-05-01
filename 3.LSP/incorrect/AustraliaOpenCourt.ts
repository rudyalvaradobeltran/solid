import { Court } from "./Court";

export class AustraliaOpenCourt extends Court {
    cutGrass(): void {
        throw new Error("No grass in Australia");
    }
}