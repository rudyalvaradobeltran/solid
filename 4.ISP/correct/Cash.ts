import { CashPayment } from './CashPayment';

export class Cash implements CashPayment {
    calculatePayment(): void {

    }
    cashPayment(): void {
        console.log('Cash uses cash payment');
    }
}