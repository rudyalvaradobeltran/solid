import { Court } from "./Court";

export class RolandGarrosCourt extends Court {
    cutGrass(): void {
        throw new Error("No grass in Roland Garros");
    }
}