import { Player } from './Player';

export class PlayerStatistics {
    winPercentage(player: Player): number {
        return player.getWin()/(player.getWin()+player.getLose());
    }

    lossPercentage(player: Player): number {
        return 0;
    }
}