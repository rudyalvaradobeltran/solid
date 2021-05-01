export class Player {
    private id : number;
    private name : string;
    private win : number;
    private lose : number;
    private date : string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getWin(): number {
        return this.win;
    }

    public setWin(win: number): void {
        this.win = win;
    }

    public getLose(): number {
        return this.lose;
    }

    public setLose(lose: number): void {
        this.lose = lose;
    }

    public getDate(): string {
        return this.date;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    winPercentage(player: Player): number {
        return player.getWin()/(player.getWin()+player.getLose());
    }

    lossPercentage(player: Player): number {
        return 0;
    }

    savePlayer(player: Player): void {
        //saves player
    }

    deletePlayer(player: Player): void {
        //deletes player
    }

    showPlayerHD(player: Player): void {
        //show player HD
    }

    showPlayerHQ(player: Player): void {
        //show player HQ
    }
}