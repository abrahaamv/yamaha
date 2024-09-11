interface Product {
    category: string;
    subcategory: string | null;
    image: string;
    name: string;
    description: string;
    discount: number | null;
    isNewArrival: boolean;
}

interface ProductCategory {
    [subcategory: string]: Product[];
}

interface ProductCatalog {
    [category: string]: ProductCategory;
}

const productCatalog: ProductCatalog = {
    motocicletas: {
        urbana: [
            {
                category: "motocicletas",
                subcategory: "urbana",
                image: "/assets/images/product_1.jpg",
                name: "MT-03 urbana",
                description: "Potencia y agilidad en un diseño compacto.",
                discount: 1000,
                isNewArrival: false
            },
            {
                category: "motocicletas",
                subcategory: "urbana",
                image: "/assets/images/product_4.jpg",
                name: "MT-07 urbana",
                description: "Más potencia para la ciudad.",
                discount: 1200,
                isNewArrival: true
            }
        ],
        racing: [
            {
                category: "motocicletas",
                subcategory: "racing",
                image: "/assets/images/product_2.jpg",
                name: "YZF-R1",
                description: "La máquina de carreras definitiva.",
                discount: 1500,
                isNewArrival: true
            }
        ],
        touring: [
            {
                category: "motocicletas",
                subcategory: "touring",
                image: "/assets/images/product_5.jpg",
                name: "FJR1300",
                description: "Confort y potencia para largas distancias.",
                discount: 1800,
                isNewArrival: false
            }
        ]
    },
    "wave runners": {
        null: [
            {
                category: "wave runners",
                subcategory: null,
                image: "/assets/images/product_3.jpg",
                name: "Sea-Doo GTI",
                description: "Diversión y velocidad sobre el agua.",
                discount: 1200,
                isNewArrival: true
            }
        ]
    }
};



