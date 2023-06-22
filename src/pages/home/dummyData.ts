import { v4 as uuid } from "uuid";

export interface ProductType {
    name: string;
    price: string;
    url: string;
    img: string;
    color: string;
    id: string;
    liked: boolean;
}

const productListData: ProductType[] = [
    {
        name: "Nike Jordan Shoes",
        price: "148,000",
        url: "Nike.com",
        img: "/src/assets/shoe-product.jpg",
        color: "#00308F",
        id: uuid(),
        liked: false,
    },
    {
        name: "Apple Iwatch Series 2",
        price: "480,000",
        url: "apple.com",
        img: "/src/assets/watch-product.png",
        color: "red",
        id: uuid(),
        liked: true
    },
    {
        name: "Bikini Exotic Bag ",
        price: "80,000",
        url: "bikiniBags.com",
        img: "/src/assets/bag-product.png",
        color: "yellow",
        id: uuid(),
        liked: true
    },
    {
        name: "Mac Book Pro Laptop",
        price: "1,800,000",
        url: "apple.com",
        img: "/src/assets/mac-product.jpg",
        color: "red",
        id: uuid(),
        liked: false
    },
    {
        name: "HeadeSet SoundCore Ankar",
        price: "50,000",
        url: "soundcore.com",
        img: "/src/assets/headset-product.jpg",
        color: "pink",
        id: uuid(),
        liked: true
    },
    {
        name: "Versace Designer Shirt",
        price: "150,000",
        url: "Versace.com",
        img: "/src/assets/shirt-product.jpg",
        color: "purple",
        id: uuid(),
        liked: false
    },
    {
        name: "Iphone 14 Pro Max",
        price: "750,000",
        url: "apple.com",
        img: "/src/assets/iphone-product.jpg",
        color: "gold",
        id: uuid(),
        liked: true
    },
]


export default productListData