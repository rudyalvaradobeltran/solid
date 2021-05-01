import { BankTransferPayment } from './BankTransferPayment';

export class BankTransfer implements BankTransferPayment {
    calculatePayment(): void {

    }
    bankTransferPayment(): void {
        console.log('Bank transfer uses bank transfer payment');
    }
}