import { Player } from "./Player";
import { PlayerStatistics } from "./PlayerStatistics";

export class PlayerTest {
    testPlayer(): void {
        var player = new Player();
        var playerStatistics = new PlayerStatistics();
        player.setId(1);
        player.setName('John');
        player.setWin(5);
        player.setLose(10);
        player.setDate('01-01-2021');
        console.log('Win Percentage: '+playerStatistics.winPercentage(player));
    }
}