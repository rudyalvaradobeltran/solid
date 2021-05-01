export interface Discount {
    apply(price : number): number;
}