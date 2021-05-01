import { Amex } from './Amex';
import { Visa } from './Visa';
import { BankTransfer } from './BankTransfer';
import { Cash } from './Cash';

export class PaymentTest {
    testPayment(){
        const amex = new Amex();
        amex.creditCardPayment();
        const visa = new Visa();
        visa.creditCardPayment();
        const bankTransfer = new BankTransfer();
        bankTransfer.bankTransferPayment();
        const cash = new Cash();
        cash.cashPayment();
    }
}