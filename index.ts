import { UserTest } from './5.DIP/correct/UserTest';
import { PlayerTest } from './1.SRP/correct/PlayerTest';
import { DiscountTest } from './2.OCP/correct/DiscountTest';
import { CourtTest } from './3.LSP/correct/CourtTest';
import { PaymentTest } from './4.ISP/correct/PaymentTest';

/* SRP */
const playerMain = new PlayerTest();
playerMain.testPlayer();

/* OCP */
const discountTest = new DiscountTest();
discountTest.testDiscount();

/* LSP */
const courtTest = new CourtTest();
courtTest.testCourt();

/* ISP */ 
const paymentTest = new PaymentTest();
paymentTest.testPayment();

/* DIP */
const userTest = new UserTest();
userTest.testUser(1);