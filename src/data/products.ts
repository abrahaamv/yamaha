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
        adventure: [
            {
                id: undefined,
                name: "TENERE 700",
                image: "/assets/images/products/motorcycles/adventure/TENERE700.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "689 c.c.",
                    "Caballaje": "67.0 Hp",
                    "Revolución": "9000 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "4.3 Galones"
                },
                chassis: {
                    "Freno delantero": "Doble Disco",
                    "Freno trasero": "Disco",
                    "Tipo de aros": "Rayos",
                    "Neumático delantero": "90/90 R21M/C 54V M+S",
                    "Neumático trasero": "150/70 R18M/C 70V M+S",
                    "Suspensión delantera": "Horquilla telescópica",
                    "Suspensión trasera": "Basculante con Monoshock"
                },
                dimensions: {
                    "Longitud total": "2,370 mm",
                    "Ancho total": "910 mm",
                    "Altura total": "1,455 mm",
                    "Altura al asiento": "875 mm",
                    "Distancia entre ejes": "1,595 mm",
                    "Distancia mínima al suelo": "240 mm",
                    "Peso total con líquidos": "449 libras"
                }
            }
        ],
        sport: [
            {
                id: undefined,
                name: "MT-15",
                image: "/assets/images/products/motorcycles/sport/MT-15.webp",
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
        dualSport: [
            {
                id: undefined,
                name: "AG200",
                image: "/assets/images/products/motorcycles/dual-sport/AG200.webp",
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
        motocross: [
            {
                id: undefined,
                name: "WR250F",
                image: "/assets/images/products/motorcycles/motocross/WR250F.webp",
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
        scooter: [
            {
                id: undefined,
                name: "RAY ZR 125 FI",
                image: "/assets/images/products/motorcycles/scooter/RAYZR125FI.webp",
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
        touring: [
            {
                id: undefined,
                name: "FZ-X 150",
                image: "/assets/images/products/motorcycles/sport-touring/FZ-X150.webp",
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
        sportHeritage: [
            {
                id: undefined,
                name: "XSR900",
                image: "/assets/images/products/motorcycles/sport-heritage/XSR900.webp",
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
        sportTouring: [
            {
                id: undefined,
                name: "TRACER 900 GT",
                image: "/assets/images/products/motorcycles/sport-touring/TRACER900GT.webp",
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
                id: undefined,
                name: "R15",
                image: "/assets/images/products/motorcycles/racing/R15.webp",
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
        urban: [
            {
                id: undefined,
                name: "YBR 125 ED",
                image: "/assets/images/products/motorcycles/urban/YBR125ED.webp",
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
        ]
    },
    sideBySideAndATVS: {
        atv: [
            {
                id: undefined,
                name: "KODIAK 450",
                image: "/assets/images/products/motorcycles/sidebyside-and-utvs/atv/KODIAK450.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "689 c.c.",
                    "Caballaje": "67.0 Hp",
                    "Revolución": "9000 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "4.3 Galones"
                },
                chassis: {
                    "Freno delantero": "Doble Disco",
                    "Freno trasero": "Disco",
                    "Tipo de aros": "Rayos",
                    "Neumático delantero": "90/90 R21M/C 54V M+S",
                    "Neumático trasero": "150/70 R18M/C 70V M+S",
                    "Suspensión delantera": "Horquilla telescópica",
                    "Suspensión trasera": "Basculante con Monoshock"
                },
                dimensions: {
                    "Longitud total": "2,370 mm",
                    "Ancho total": "910 mm",
                    "Altura total": "1,455 mm",
                    "Altura al asiento": "875 mm",
                    "Distancia entre ejes": "1,595 mm",
                    "Distancia mínima al suelo": "240 mm",
                    "Peso total con líquidos": "449 libras"
                }
            }
        ],
        utv: [
            {
                id: undefined,
                name: "RMAX 2",
                image: "/assets/images/products/motorcycles/sidebyside-and-utvs/utv/RMAX2.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "689 c.c.",
                    "Caballaje": "67.0 Hp",
                    "Revolución": "9000 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "4.3 Galones"
                },
                chassis: {
                    "Freno delantero": "Doble Disco",
                    "Freno trasero": "Disco",
                    "Tipo de aros": "Rayos",
                    "Neumático delantero": "90/90 R21M/C 54V M+S",
                    "Neumático trasero": "150/70 R18M/C 70V M+S",
                    "Suspensión delantera": "Horquilla telescópica",
                    "Suspensión trasera": "Basculante con Monoshock"
                },
                dimensions: {
                    "Longitud total": "2,370 mm",
                    "Ancho total": "910 mm",
                    "Altura total": "1,455 mm",
                    "Altura al asiento": "875 mm",
                    "Distancia entre ejes": "1,595 mm",
                    "Distancia mínima al suelo": "240 mm",
                    "Peso total con líquidos": "449 libras"
                }
            }
        ]
    },
    marineEngines: {
        twoStrokeEngine: [
            {
                id: undefined,
                name: "200AETX",
                image: "/assets/images/products/marine-engines/two-stroke-engines/200AETX.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "2 Tiempos, V6",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "2596 c.c.",
                    "Caballaje": "200 Hp",
                    "Inducción del combustible": "Carburación (3, doble)",
                    "Dirección": "Hidráulico",
                    "Arranque": "Eléctrico",
                    "Capacidad de tanque": "6.6 Gal",
                    "Peso": "184 Kg",
                    "Pata": "Pata Extra Larga",
                    "Combustible": "Gasolina",
                    "Consumo Max Combustible": "81-L/H",
                    "Contra rotación": "No"
                }

            }
        ],
        fourStrokeEngine: [
            {
                id: undefined,
                name: "F115BETL",
                image: "/assets/images/products/marine-engines/four-stroke-engines/F115BETL.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, V6",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "2596 c.c.",
                    "Caballaje": "200 Hp",
                    "Inducción del combustible": "Carburación (3, doble)",
                    "Dirección": "Hidráulico",
                    "Arranque": "Eléctrico",
                    "Capacidad de tanque": "6.6 Gal",
                    "Peso": "184 Kg",
                    "Pata": "Pata Extra Larga",
                    "Combustible": "Gasolina",
                    "Consumo Max Combustible": "81-L/H",
                    "Contra rotación": "No"
                }

            }
        ]
    },
    waveRunners: {
        "": [
            {
                id: undefined,
                name: "SUPER JET",
                image: "/assets/images/products/wave-runners/SUPERJET.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, Bicilíndrico, DOHC",
                    "Refrigeración": "Por líquido",
                    "Cilindrada": "689 c.c.",
                    "Caballaje": "67.0 Hp",
                    "Revolución": "9000 RPM",
                    "Transmisión Final": "Cadena",
                    "Velocidades": "6 velocidades",
                    "Arranque": "Eléctrico",
                    "Sistema de alimentación": "Inyección Electrónica",
                    "Capacidad de combustible": "4.3 Galones"
                }
            }
        ]
    },
    waterPumps: {
        "": [
            {
                id: undefined,
                name: "YP30C",
                image: "/assets/images/products/water-pumps/YP30C.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, OHV",
                    "Refrigeración": "Por aire forzada",
                    "Cilindrada": "179 c.c.",
                    "Caballaje": "4.2 Hp",
                    "Transmisión": "No especificada",
                    "Arranque": "Manual",
                    "Capacidad de tanque": "0.9 Gal",
                    "Combustible": "Gasolina",
                    "Peso": "28.7 Kg"
                }
            }
        ]
    },
    generators: {
        "": [
            {
                id: undefined,
                name: "MZ175B2B",
                image: "/assets/images/products/generators/MZ175B2B.webp",
                price: undefined,
                discount: null,
                isNewArrival: false,
                technicalInformation: {
                    "Motor": "4 Tiempos, OHV",
                    "Refrigeración": "Por aire forzada",
                    "Cilindrada": "179 c.c.",
                    "Caballaje": "4.2 Hp",
                    "Transmisión": "No especificada",
                    "Arranque": "Manual",
                    "Capacidad de tanque": "0.9 Gal",
                    "Combustible": "Gasolina",
                    "Peso": "28.7 Kg"
                }
            }
        ]
    },
}
