import { Payment } from './Payment';

export interface CreditCardPayment extends Payment {
    creditCardPayment(): void;
}