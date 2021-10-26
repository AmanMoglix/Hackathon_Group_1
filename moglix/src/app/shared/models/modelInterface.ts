export interface Product{
  
    productId:any;
    productPrice:any;
	stockId:any
     supplier:Supplier;
     catalog:Catalog;
     
}
export class Supplier{
    id: any;
firstName: any;
lastName: any;
username:any;
}
export class Cart{
    id:any;
stockId:any;
supplierId:any;
productId: any;
productQuantity: any;
totalPrice: any;
}
export class Catalog{
    id: any;
    categoryId: any;
    productName: any;
    productDescription: any;
    productImage: any;
}
export interface IAlert{
    id: number;
    type: string;
    message: string;
}