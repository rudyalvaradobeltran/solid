export class Discount {
    apply(price : number): number {
        return price * 0.5;
    }
}