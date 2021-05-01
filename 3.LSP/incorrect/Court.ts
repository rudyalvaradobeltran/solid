export class Court {
    private width : number;
    private height : number;
    private grass : string;

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getHeight(): number {
        return this.height;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getGrass(): string {
        return this.grass;
    }

    public setGrass(grass: string): void {
        this.grass = grass;
    }

    cutGrass(): void {

    }

}