import { CreditCardPayment } from './CreditCardPayment';

export class Amex implements CreditCardPayment {
    calculatePayment(): void {

    }
    creditCardPayment(): void {
        console.log('American Express uses credit card payment');
    }
}