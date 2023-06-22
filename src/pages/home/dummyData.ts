import { v4 as uuid } from "uuid";

export interface ProductType {
    name: string;
    price: string;
    url: string;
    img: string;
    color: string;
    id: string;
}

const productListData: ProductType[] = [
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "red",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "yellow",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "brown",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "blue",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "green",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "purple",
        id: uuid()
    },
    {
        name: "Serena Faux Mink Lashes",
        price: "48,000",
        url: "adeyanjuadeyemi.com",
        img: "/src/assets/wizkid.jpg",
        color: "orange",
        id: uuid()
    },
]


export default productListData