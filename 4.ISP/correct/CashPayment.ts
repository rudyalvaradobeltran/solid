import { Payment } from './Payment';

export interface CashPayment extends Payment {
    cashPayment(): void;
}