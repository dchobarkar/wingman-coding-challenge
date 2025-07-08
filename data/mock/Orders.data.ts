export interface Order {
  id: string;
  productName: string;
  productImage: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
  chatLink: string;
}

export const ordersData: Order[] = [
  {
    id: "1",
    productName: "Product Name 1",
    productImage: "/image/product.png",
    date: "24 Apr '2024 10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "#",
  },
  {
    id: "2",
    productName: "Product Name 2",
    productImage: "/image/product.png",
    date: "24 Apr '2024 10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "#",
  },
  {
    id: "3",
    productName: "Product Name 3",
    productImage: "/image/product.png",
    date: "24 Apr '2024 10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "#",
  },
  {
    id: "4",
    productName: "Product Name 4",
    productImage: "/image/product.png",
    date: "24 Apr '2024 10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "#",
  },
  {
    id: "5",
    productName: "Product Name 5",
    productImage: "/image/product.png",
    date: "24 Apr '2024 10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
    chatLink: "#",
  },
];
