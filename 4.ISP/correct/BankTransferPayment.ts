import { Payment } from './Payment';

export interface BankTransferPayment extends Payment {
    bankTransferPayment(): void;
} 