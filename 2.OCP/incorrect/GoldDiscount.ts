export class GoldDiscount{
    apply(price : number): number {
        return price * 0.2;
    }
}