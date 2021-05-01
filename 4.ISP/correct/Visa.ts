import { CreditCardPayment } from './CreditCardPayment';

export class Visa implements CreditCardPayment {
    calculatePayment(): void {

    }
    creditCardPayment(): void {
        console.log('Visa uses credit card payment');
    }
}