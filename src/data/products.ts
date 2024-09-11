interface TechnicalInformation {
    [key: string]: string;
}

interface Chassis {
    [key: string]: string;
}

interface Dimensions {
    [key: string]: string;
}

interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: number;
    discount?: number;
    isNewArrival: boolean;
    technicalInformation?: TechnicalInformation;
    chassis?: Chassis;
    dimensions?: Dimensions;
}

interface ProductCategory {
    [subcategory: string]: Product[];
}

interface ProductCatalog {
    [category: string]: ProductCategory;
}

const productCatalog: ProductCatalog = {
    motorcycles: {
        sport: [
            {
                id: "1",
                name: "MT-03",
                description: "Potencia y agilidad en un diseño compacto.",
                image: "/assets/images/products/motorcycles/sport/MT-03.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "321 c.c.",
                    "Caballaje": "41 Hp",
                    "Revolución": "10,750 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "3.7 Galones"
                },
                chassis: {
                    "Freno delantero": "Disco",
                    "Freno trasero": "Disco",
                    "Tipo de aros": "Magnesio",
                    "Neumático delantero": "110/70-17M/C 54H",
                    "Neumático trasero": "140/70-17M/C 66H",
                    "Suspensión delantera": "Horquilla telescópica",
                    "Suspensión trasera": "Brazo Basculante"
                },
                dimensions: {
                    "Longitud total": "2,090 mm",
                    "Ancho total": "745 mm",
                    "Altura total": "1,035 mm",
                    "Altura al asiento": "780 mm",
                    "Distancia entre ejes": "1,350 mm",
                    "Distancia mínima al suelo": "160 mm",
                    "Peso total con líquidos": "363 libras"
                }
            },
            {
                id: "2",
                name: "MT-03",
                description: "Potencia y agilidad en un diseño compacto.",
                image: "/assets/images/products/motorcycles/sport/MT-03.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "321 c.c.",
                    "Caballaje": "41 Hp",
                    "Revolución": "10,750 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "3.7 Galones"
                },
                chassis: {
                    "Freno delantero": "Disco",
                    "Freno trasero": "Disco",
                    "Tipo de aros": "Magnesio",
                    "Neumático delantero": "110/70-17M/C 54H",
                    "Neumático trasero": "140/70-17M/C 66H",
                    "Suspensión delantera": "Horquilla telescópica",
                    "Suspensión trasera": "Brazo Basculante"
                },
                dimensions: {
                    "Longitud total": "2,090 mm",
                    "Ancho total": "745 mm",
                    "Altura total": "1,035 mm",
                    "Altura al asiento": "780 mm",
                    "Distancia entre ejes": "1,350 mm",
                    "Distancia mínima al suelo": "160 mm",
                    "Peso total con líquidos": "363 libras"
                }
            }
        ],
        racing: [
            {
                id: "3",
                name: "YZF-R1",
                description: "La máquina de carreras definitiva.",
                image: "/assets/images/product_2.jpg",
                price: undefined,
                discount: 1500,
                isNewArrival: true
            }
        ],
        touring: [
            {
                id: "4",
                name: "FJR1300",
                description: "Confort y potencia para largas distancias.",
                image: "/assets/images/product_5.jpg",
                price: undefined,
                discount: null,
                isNewArrival: false
            }
        ]
    },
    waveRunners: {
        "": [
            {
                id: "5",
                name: "Sea-Doo GTI",
                description: "Diversión y velocidad sobre el agua.",
                image: "/assets/images/product_3.jpg",
                discount: 1200,
                price: null,
                isNewArrival: true
            }
        ]
    }
};
