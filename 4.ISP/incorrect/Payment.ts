export interface Payment {
    calculatePayment(): void;
    creditCardPayment(): void;
    bankTransferPayment(): void;
    cashPayment(): void;
}