const products = [
    {
    category: "motocicletas",
    subcategories: {
            "adventure": [
                {
                    "image": "/assets/images/products/motocicletas/adventure/TENERE700.webp",
                    "name": "TENERE 700",
                    "category": "motocicletas",
                    "subcategory": "adventure",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, Bilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "689 c.c.",
                        "Caballaje": "67.0 Hp",
                        "Revolucion": "9,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistemadealimentacion": "Inyección Electrónica",
                        "Capacidad de combustible": "4.3 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "90/90 R21M/C 54V M+S",
                        "Neumático trasero": "150/70 R18M/C 70V M+S",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Basculante con Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "2,370 mm",
                        "Ancho total": "910 mm",
                        "Altura total": "1,455 mm",
                        "Altura al asiento": "875 mm",
                        "Distancia entre ejes": "1,595 mm",
                        "Distanciaminimaalsuelo": "240 mm",
                        "Pesototalconliquidos": "449 libras"
                    }
                },
            ],
            "deportivas": [
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-15.webp",
                    "name": "MT-15",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, Monocolíndrico, SOHC",
                        "Refrigeración": "Por líquido",
                        "Cilindrada": "155c.c.",
                        "Caballaje": "19 Hp",
                        "Revolución": "10,000 RPM",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "10,4 L"
                    },
                    "chassis": {
                        "Freno delantero": "Disco hidráulico",
                        "Freno trasero": "Disco hidráulico",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "110/70-17M/C 54S",
                        "Neumático trasero": "140/70-17M/C 66S",
                        "Suspensión delantera": "Horquilla invertida",
                        "Suspensión trasera": "Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "1,965 mm",
                        "Ancho total": "800 mm",
                        "Altura total": "1,065 mm",
                        "Altura al asiento": "810 mm",
                        "Distancia entre ejes": "1,335 mm",
                        "Distancia mínima al suelo": "155 mm",
                        "Peso total con líquidos": "133 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-10SP.webp",
                    "name": "MT-10 SP",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 4 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "998 c.c.",
                        "Caballaje": "158 Hp",
                        "Revolución": "11,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "4.49 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "190/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescópica invertida",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,095 mm",
                        "Ancho total": "800 mm",
                        "Altura total": "1,110 mm",
                        "Altura al asiento": "825 mm",
                        "Distancia entre ejes": "1,400 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "462 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-09SP.webp",
                    "name": "MT-09 SP",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "847 c.c.",
                        "Caballaje": "113.4 Hp",
                        "Revolución": "10,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.70 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "180/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescópica invertida",
                        "Suspensión trasera": "Coil spring/Gas-hydraulic damper"
                    },
                    "dimensions": {
                        "Longitud total": "2,075 mm",
                        "Ancho total": "815 mm",
                        "Altura total": "1,120 mm",
                        "Altura al asiento": "820 mm",
                        "Distancia entre ejes": "1,440 mm",
                        "Distancia mínima al suelo": "135 mm",
                        "Peso total con líquidos": "425 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-09.webp",
                    "name": "MT-09",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "847 c.c.",
                        "Caballaje": "113.4 Hp",
                        "Revolución": "10,000rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.70 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "180/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "2,075 mm",
                        "Ancho total": "815 mm",
                        "Altura total": "1,120 mm",
                        "Altura al asiento": "820 mm",
                        "Distancia entre ejes": "1,440 mm",
                        "Distancia mínima al suelo": "135 mm",
                        "Peso total con líquidos": "425 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-07.webp",
                    "name": "MT-07",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, Bicilindrico, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "689 c.c.",
                        "Caballaje": "73.7 Hp",
                        "Revolución": "9,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.70 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70 ZR 17M/C 58W",
                        "Neumático trasero": "180/55 ZR 17M/C 73W",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,085 mm",
                        "Ancho total": "745 mm",
                        "Altura total": "1,090 mm",
                        "Altura al asiento": "805 mm",
                        "Distancia entre ejes": "1,400 mm",
                        "Distancia mínima al suelo": "140 mm",
                        "Peso total con líquidos": "403 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/deportivas/MT-03.webp",
                    "name": "MT-03",
                    "category": "motocicletas",
                    "subcategory": "deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, Bicilindrico, DOHC",
                        "Refrigeración": "Por líquido",
                        "Cilindrada": "321 c.c.",
                        "Caballaje": "41 Hp",
                        "Revolución": "10,750 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.7 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "110/70-17M/C 54H",
                        "Neumático trasero": "140/70-17M/C 66H",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,090 mm",
                        "Ancho total": "745 mm",
                        "Altura total": "1,035 mm",
                        "Altura al asiento": "780 mm",
                        "Distancia entre ejes": "1,350 mm",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "363 libras"
                    }
                },
            ],
            "doble propósito": [
                {
                    "image": "/assets/images/products/motocicletas/doble-proposito/AG200.webp",
                    "name": "AG200",
                    "category": "motocicletas",
                    "subcategory": "doble propósito",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC, 2 válvulas",
                        "Refrigeración": "por aire",
                        "Cilindrada": "196 c.c.",
                        "Caballaje": "14.1 Hp",
                        "Revolución": "7,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "2.6 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Fricción",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "80/100-21 51M",
                        "Neumático trasero": "4.10-18 59M",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "2,160 mm",
                        "Ancho total": "930 mm",
                        "Altura total": "1,555 mm",
                        "Altura al asiento": "930 mm",
                        "Distancia entre ejes": "1345 mm",
                        "Distancia mínima al suelo": "255 mm",
                        "Peso total con líquidos": "282 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/doble-proposito/XTZ150.webp",
                    "name": "XTZ150",
                    "category": "motocicletas",
                    "subcategory": "doble propósito",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "149 c.c.",
                        "Caballaje": "12.3 Hp",
                        "Revolucion": "7,750 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Electrico",
                        "Sistemadealimentacion": "Inyección Electrónica",
                        "Capacidad de combustible": "3.17 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "90/90-19M/C 60P",
                        "Neumático trasero": "110/90-17MC 60P",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Monoshock con biela"
                    },
                    "dimensions": {
                        "Longitud total": "2,050 mm",
                        "Ancho total": "830 mm",
                        "Altura total": "1,140 mm",
                        "Altura al asiento": "835 mm",
                        "Distancia entre ejes": "1,350 mm",
                        "Distanciaminimaalsuelo": "235 mm",
                        "Pesototalconliquidos": "288 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/doble-proposito/XTZ125E.webp",
                    "name": "XTZ125E",
                    "category": "motocicletas",
                    "subcategory": "doble propósito",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, monocilíndrico SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "125 c.c.",
                        "Caballaje": "10 Hp",
                        "Revolucion": "8,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Electrico y Patada",
                        "Sistemadealimentacion": "Caburador",
                        "Capacidad de combustible": "2.8 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "80/90-21M/C 48P",
                        "Neumático trasero": "110/80-18M/C 58P",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "2,090 mm",
                        "Ancho total": "830 mm",
                        "Altura total": "1,115 mm",
                        "Altura al asiento": "840 mm",
                        "Distancia entre ejes": "1,340 mm",
                        "Distanciaminimaalsuelo": "260 mm",
                        "Pesototalconliquidos": "260 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/doble-proposito/YBR125G.webp",
                    "name": "YBR125G",
                    "category": "motocicletas",
                    "subcategory": "doble propósito",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, monocilindrico SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "125 c.c.",
                        "Caballaje": "10 Hp",
                        "Revolucion": "8,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Electrico y Patada",
                        "Sistemadealimentacion": "Carburador",
                        "Capacidad de combustible": "3.17 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Discos",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.75-18 42P",
                        "Neumático trasero": "90/90-1857P",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,980 mm",
                        "Ancho total": "745 mm",
                        "Altura total": "1,050 mm",
                        "Altura al asiento": "780 mm",
                        "Distancia entre ejes": "1,290 mm",
                        "Distanciaminimaalsuelo": "160 mm",
                        "Pesototalconliquidos": "264 libras"
                    }
                },
            ],
            "motocross": [
                {
                    "image": "/assets/images/products/motocicletas/motocross/WR250F.webp",
                    "name": "WR250F",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "250cc",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistemadealimentacion": "Inyección electrónica",
                        "Capacidad de combustible": "2.5 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "80/100 – 21",
                        "Neumático trasero": "110/100 – 18",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Monocross"
                    },
                    "dimensions": {
                        "Longitud total": "2.174 mm",
                        "Ancho total": "825 mm",
                        "Altura total": "1.270 mm",
                        "Altura al asiento": "1.480 mm",
                        "Distancia entre ejes": "955 mm",
                        "Distanciaminimaalsuelo": "117 mm",
                        "Pesototalconliquidos": "253 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/motocross/TTR-230.webp",
                    "name": "TTR-230",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Monocilíndrico, 4T, SOHC,",
                        "Refrigeración": "por aire",
                        "Cilindrada": "223 c.c.",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Toma constante, 6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "8 Litros"
                    },
                    "chassis": {
                        "CHASIS": "Tipo Diamante",
                        "Freno delantero": "Disco simple de 220 mm x 3,5 mm",
                        "Freno trasero": "Tambor de 130 mm",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "80/100-21 51R",
                        "Neumático trasero": "100/100-18 59R",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Basculante monocross"
                    },
                    "dimensions": {
                        "Longitud total": "2,065 mm",
                        "Ancho total": "800 mm",
                        "Altura total": "1,180 mm",
                        "Altura al asiento": "860 mm",
                        "Distancia entre ejes": "1,385 mm",
                        "Distancia mínima al suelo": "295 mm",
                        "Peso total con líquidos": "114 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/motocross/TTR-50.webp",
                    "name": "TTR-50",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, 1 cilindro, SOHC, 2 válvulas",
                        "Refrigeración": "Aire",
                        "Cilindrada": "49 c.c.",
                        "Caballaje": "3 Hp",
                        "Revolucion": "8,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "3 marchas",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Carburador Mikuni VM11",
                        "Capacidad de combustible": "3.1 Litros"
                    },
                    "chassis": {
                        "Freno delantero": "Tambor",
                        "Freno trasero": "Tambor",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.50-10 4PR",
                        "Neumático trasero": "2.50-10 4PR",
                        "Suspensión delantera": "Horquilla telescópica"
                    },
                    "dimensions": {
                        "Longitud total": "1,305 mm",
                        "Ancho total": "595 mm",
                        "Altura total": "775 mm",
                        "Altura al asiento": "555 mm",
                        "Distancia entre ejes": "925 mm",
                        "Peso total con líquidos": "57 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/motocross/YZ250F.webp",
                    "name": "YZ250F",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "250 c.c.",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Electrico",
                        "Sistemadealimentacion": "Inyeccion Electronica",
                        "Capacidad de combustible": "1.6 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "80/100 – 21 51M",
                        "Neumático trasero": "100/90 – 19 57M",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Monocross"
                    },
                    "dimensions": {
                        "Longitud total": "2,175 mm",
                        "Ancho total": "825 mm",
                        "Altura total": "1,285 mm",
                        "Altura al asiento": "970 mm",
                        "Distancia entre ejes": "1,465 mm",
                        "Distanciaminimaalsuelo": "360 mm",
                        "Pesototalconliquidos": "229 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/motocross/YZ85LW.webp",
                    "name": "YZ85LW",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "2 Tiempos",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "85 cc",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Patada",
                        "Sistemadealimentacion": "Caburador",
                        "Capacidad de combustible": "1.3 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Rayos",
                        "Neumático delantero": "70/100-19 42M",
                        "Neumático trasero": "90/100-16 52M",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "1,903 mm",
                        "Ancho total": "758 mm",
                        "Altura total": "1,156 mm",
                        "Altura al asiento": "904 mm",
                        "Distancia entre ejes": "1,286 mm",
                        "Distanciaminimaalsuelo": "393 mm",
                        "Pesototalconliquidos": "160 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/motocross/PW50.webp",
                    "name": "PW50",
                    "category": "motocicletas",
                    "subcategory": "motocross",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "2 Tiempos Monocilindro",
                        "Refrigeración": "por aire",
                        "Cilindrada": "49 c.c.",
                        "Caballaje": "2.7 Hp",
                        "Transmisión Final": "Eje",
                        "Velocidades": "Automática",
                        "Arranque": "Pata",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "0.5 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Tambor",
                        "Freno trasero": "Tambor",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.50-10 4PR",
                        "Neumático trasero": "2.50-10 4PR",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Basculante, doble amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,245 mm",
                        "Ancho total": "610 mm",
                        "Altura total": "705 mm",
                        "Altura al asiento": "485 mm",
                        "Distancia entre ejes": "855 mm",
                        "Distancia mínima al suelo": "95 mm",
                        "Peso total con líquidos": "90 libras"
                    }
                },
            ],
            "scooter": [
                {
                    "image": "/assets/images/products/motocicletas/scooter/RAYZR125FI.webp",
                    "name": "RAY ZR 125 FI",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "125 c.c.",
                        "Caballaje": "8 Hp",
                        "Revolución": "5,000 rpm",
                        "Transmisión Final": "Automático CVT",
                        "Velocidades": "4 velocidades",
                        "Arranque": "Eléctrico y pedal",
                        "Sistema de alimentación": "Inyección electrónica",
                        "Capacidad de combustible": "5.2 Litros"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "90/90/12",
                        "Neumático trasero": "110/90/10",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Amortiguador Lateral"
                    },
                    "dimensions": {
                        "Longitud total": "1.850 mm",
                        "Ancho total": "670 mm",
                        "Altura total": "1,080 mm",
                        "AlturaAsiento": "780 mm",
                        "Distancia entre ejes": "1,250 mm",
                        "Distancia mínima al suelo": "145 mm",
                        "Peso total con líquidos": "99 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/TMAX560.webp",
                    "name": "TMAX 560",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, bi-cilindrico DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "562 c.c.",
                        "Caballaje": "46 Hp",
                        "Revolucion": "7,500 rpm",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Automática",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "ParMáximoDeclarado": "56 nm"
                    },
                    "chassis": {
                        "Longitud total": "2,200 mm",
                        "Ancho total": "765 mm",
                        "Altura total": "1420 mm-1555 mm (parabrisas ajustable)",
                        "Altura al asiento": "800 mm",
                        "Distancia entre ejes": "1,575 mm",
                        "Distanciaminimaalsuelo": "125 mm",
                        "Pesototalconliquidos": "218 Kg"
                    },
                    "dimensions": {
                        "Freno delantero": "Doble disco 267mm",
                        "Freno trasero": "Disco 282mm",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70 x 15″",
                        "Neumático trasero": "160/60 x 15″",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Monoamortiguador"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/XMAX300.webp",
                    "name": "XMAX 300",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, monocilindrico SOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "292 c.c.",
                        "Caballaje": "27.6 Hp",
                        "Revolucion": "7,250 rpm",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Automatica",
                        "Arranque": "Electrico",
                        "Sistemadealimentacion": "Inyección Electrónica",
                        "Capacidad de combustible": "3.4 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.50 x 18 4PR",
                        "Neumático trasero": "2.75 x 18 6PR",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "2,185 mm",
                        "Ancho total": "775 mm",
                        "Altura total": "1,415 mm",
                        "Altura al asiento": "795 mm",
                        "Distancia entre ejes": "1,540 mm",
                        "Distanciaminimaalsuelo": "135 mm",
                        "Pesototalconliquidos": "394 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/NMAX155.webp",
                    "name": "NMAX 155",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "155 c.c.",
                        "Caballaje": "14.9 Hp",
                        "Revolución": "8,000 rpm",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Automática",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "1.7 Galones"
                    },
                    "chassis": {
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.50 x 18 4PR",
                        "Neumático trasero": "2.75 x 18 6PR",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,995mm",
                        "Ancho total": "740 mm",
                        "Altura total": "1,115 mm",
                        "Altura al asiento": "765 mm",
                        "Distancia entre ejes": "1,350 mm",
                        "Distancia mínima al suelo": "135 mm",
                        "Peso total con líquidos": "279 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/CRYPTON.webp",
                    "name": "CRYPTON",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "110 c.c.",
                        "Revolucion": "8,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "4 velocidades",
                        "Arranque": "Eléctrico y Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "1,1 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "70/90 17M/C 38P",
                        "Neumático trasero": "80/90 17M/C 50P",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,870 mm",
                        "Ancho total": "675 mm",
                        "Altura total": "1,040 mm",
                        "Altura al asiento": "770 mm",
                        "Distancia entre ejes": "1,205 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "224 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/RAYZ.webp",
                    "name": "RAY ZR CON FRENO DE DISCO",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "113 c.c.",
                        "Caballaje": "7.1 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Automática",
                        "Arranque": "Eléctrico y Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "1.3 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "90/100-10 53J",
                        "Neumático trasero": "90/100-10 53J",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Mono Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,820 mm",
                        "Ancho total": "690 mm",
                        "Altura total": "1,115 mm",
                        "Altura al asiento": "775 mm",
                        "Distancia entre ejes": "1,270 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "227 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/scooter/RAYZR.webp",
                    "name": "RAY ZR",
                    "category": "motocicletas",
                    "subcategory": "scooters",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "115 c.c.",
                        "Caballaje": "7.1 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Banda",
                        "Velocidades": "Automática",
                        "Arranque": "Eléctrico y Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "1.3 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Fricción",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "90/100-10 53J",
                        "Neumático trasero": "90/100-10 53J",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Mono Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "",
                        "Ancho total": "690 mm",
                        "Altura total": "1,115 mm",
                        "Altura al asiento": "775mm",
                        "Distancia entre ejes": "1,270 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "1,820 libras"
                    }
                },
            ],
            "semi deportivas": [
                {
                    "image": "/assets/images/products/motocicletas/semi-deportivas/FZ-X150.webp",
                    "name": "FZ-X 150",
                    "category": "motocicletas",
                    "subcategory": "semi deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "149 c.c.",
                        "Caballaje": "14 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.17 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco ABS",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "100/80-17M/C 52P",
                        "Neumático trasero": "140/60-17M/C 63P",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "1,990 mm",
                        "Ancho total": "770 mm",
                        "Altura total": "1,050 mm",
                        "Altura al asiento": "790 mm",
                        "Distancia entre ejes": "1,330 mm",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "291 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/semi-deportivas/FZ25.webp",
                    "name": "FZN250",
                    "category": "motocicletas",
                    "subcategory": "semi deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire y aceite",
                        "Cilindrada": "249 c.c.",
                        "Caballaje": "20.6 Hp",
                        "Revolución": "8,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.6 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "100/80-17 M/C 52P",
                        "Neumático trasero": "140/70-17M/C 66S",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "2,015 mm",
                        "Ancho total": "770 mm",
                        "Altura total": "1,075 mm",
                        "Altura al asiento": "795mm",
                        "Distancia entre ejes": "1360 mm",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "321 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/semi-deportivas/FZS150.webp",
                    "name": "FZS150 V3.0",
                    "category": "motocicletas",
                    "subcategory": "semi deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "149 c.c.",
                        "Caballaje": "14 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.17 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco ABS",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "100/80-17M/C 52P",
                        "Neumático trasero": "140/60-17M/C 63P",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "1,990 mm",
                        "Ancho total": "770 mm",
                        "Altura total": "1,050 mm",
                        "Altura al asiento": "790 mm",
                        "Distancia entre ejes": "1,330 mm",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "291 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/semi-deportivas/FZ150.webp",
                    "name": "FZN150",
                    "category": "motocicletas",
                    "subcategory": "semi deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "149 c.c.",
                        "Caballaje": "14 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Patada",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.17 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "100/80-17M/C 52P",
                        "Neumático trasero": "140/60-17M/C 63P",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Monoshock"
                    },
                    "dimensions": {
                        "Longitud total": "1,990 mm",
                        "Ancho total": "770 mm",
                        "Altura total": "1,050 mm",
                        "Altura al asiento": "790 mm",
                        "Distancia entre ejes": "1,330 mm",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "291 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/semi-deportivas/SZ150.webp",
                    "name": "SZ150",
                    "category": "motocicletas",
                    "subcategory": "semi deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "150 c.c.",
                        "Caballaje": "12 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Eléctrico y Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "3.7 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2-75 17 41P",
                        "Neumático trasero": "100/90 – 17 55P",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "2,050 mm",
                        "Ancho total": "730 mm",
                        "Altura total": "1,100 mm",
                        "Altura al asiento": "802 mm",
                        "Distancia entre ejes": "1,320",
                        "Distancia mínima al suelo": "165 mm",
                        "Pesototalconliquidos": "266 libras"
                    }
                },
            ],
            "sport heritage": [
                {
                    "image": "/assets/images/products/motocicletas/sport-heritage/XSR900.webp",
                    "name": "XSR900",
                    "category": "motocicletas",
                    "subcategory": "sport heritage",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "890 c.c.",
                        "Caballaje": "119 Hp",
                        "Revolucíon": "8,750 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.70 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "180/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "MonoShock"
                    },
                    "dimensions": {
                        "Longitud total": "2,155 mm",
                        "Ancho total": "815 mm",
                        "Altura total": "1,135 mm",
                        "Altura al asiento": "810 mm",
                        "Distancia entre ejes": "1,495 mm",
                        "Distanciaminimaalsuelo": "140 mm",
                        "Pesototalconliquidos": "193 Kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/sport-heritage/XSR700.webp",
                    "name": "XSR700",
                    "category": "motocicletas",
                    "subcategory": "sport heritage",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 2 cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "689 c.c.",
                        "Caballaje": "73.7 Hp",
                        "Revolucion": "9,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Electrico",
                        "Sistemadealimentacion": "Inyeccion Electronica",
                        "Capacidad de combustible": "3.70 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70 ZR 17M/C(58V)",
                        "Neumático trasero": "180/55 ZR 17M/C(73V)",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,075 mm",
                        "Ancho total": "820 mm",
                        "Altura total": "1,130 mm",
                        "Altura al asiento": "835 mm",
                        "Distancia entre ejes": "1,405 mm",
                        "Distanciaminimaalsuelo": "140 mm",
                        "Pesototalconliquidos": "410 libras"
                    }
                },
            ],
            "sport touring": [
                {
                    "image": "/assets/images/products/motocicletas/sport-touring/TRACER900GT.webp",
                    "name": "TRACER 900 GT",
                    "category": "motocicletas",
                    "subcategory": "sport touring",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "890c.c.",
                        "Caballaje": "119 Hp",
                        "Revolucion": "10,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "4.7 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "180/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,175 mm",
                        "Ancho total": "850 mm",
                        "Altura total": "1,375 mm max 1,430 mm",
                        "Altura al asiento": "810 mm",
                        "Distancia entre ejes": "1,500 mm",
                        "Distanciaminimaalsuelo": "135 mm",
                        "Pesototalconliquidos": "213 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/sport-touring/TRACER900GT+.webp",
                    "name": "TRACER 9 GT+",
                    "category": "motocicletas",
                    "subcategory": "sport touring",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "890 c.c.",
                        "Caballaje": "119 Hp",
                        "Revolucion": "10,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónico",
                        "Capacidad de combustible": "4.7 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W)",
                        "Neumático trasero": "180/55ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Brazo Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "2,175 mm",
                        "Ancho total": "850 mm",
                        "Altura total": "1,375 mm max 1,430 mm",
                        "Altura al asiento": "810 mm",
                        "Distancia entre ejes": "1,500 mm",
                        "Distanciaminimaalsuelo": "135 mm",
                        "Pesototalconliquidos": "213 kg"
                    }
                },
            ],
            "super deportivas": [
                {
                    "image": "/assets/images/products/motocicletas/super-deportivas/R15.webp",
                    "name": "R15",
                    "category": "motocicletas",
                    "subcategory": "super deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, monocilíndrica, SOHC, 4 válvulas",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "155 c.c.",
                        "Caballaje": "18Hp a 10000 rpm",
                        "Revolucion": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "11 Litros"
                    },
                    "chassis": {
                        "CHASIS": "Diamante",
                        "Freno delantero": "Disco hidráulico con ABS",
                        "Freno trasero": "Disco hidráulico con ABS",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "100/80-17M/C 52P",
                        "Neumático trasero": "140/70R17M/C 66H",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Basculante"
                    },
                    "dimensions": {
                        "Longitud total": "1,990 mm",
                        "Ancho total": "725 mm",
                        "Altura total": "1,135 mm",
                        "Altura al asiento": "835 mm",
                        "Distancia entre ejes": "815 mm",
                        "Distancia mínima al suelo": "170 mm",
                        "Peso total con líquidos": "140 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/super-deportivas/R7.webp",
                    "name": "R7",
                    "category": "motocicletas",
                    "subcategory": "super deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, 2 cilindros, DOHC, 4 válvulas",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "689 c.c.",
                        "Caballaje": "72.4 Hp",
                        "Revolucion": "8,750 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "Toma constante, 6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "3.43 Galones"
                    },
                    "chassis": {
                        "CHASIS": "Diamante",
                        "Freno delantero": "Freno hidráulico de doble disco, Ø 298 mm",
                        "Freno trasero": "Freno hidráulico de disco único, Ø 245 mm",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70ZR17M/C (58W) sin tubo",
                        "Neumático trasero": "180/55ZR17M/C (73W) sin tubo",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Brazo oscilante, suspensión tipo eslabón"
                    },
                    "dimensions": {
                        "Longitud total": "2,070 mm",
                        "Ancho total": "705 mm",
                        "Altura total": "1,160 mm",
                        "Altura al asiento": "835 mm",
                        "Distancia entre ejes": "1,395 mm",
                        "Distancia mínima al suelo": "135 mm",
                        "Peso total con líquidos": "188 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/super-deportivas/R1M.webp",
                    "name": "R1M",
                    "category": "motocicletas",
                    "subcategory": "super deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, 4 cilindros, DOHC, 4 válvulas",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "998 c.c.",
                        "Caballaje": "200 Hp",
                        "Revolucion": "13,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "Toma constante, 6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "4.49 Galones"
                    },
                    "chassis": {
                        "CHASIS": "Deltabox de aluminio, Diamante",
                        "Freno delantero": "Doble disco hidráulico, Ø 320 mm",
                        "Freno trasero": "Un disco de freno hidráulico, Ø 220 mm",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70 ZR17M/C (58 W), sin cámara",
                        "Neumático trasero": "200/55 ZR17M/C (78 W), sin cámara",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "suspensión tipo eslabón, Brazo oscilante"
                    },
                    "dimensions": {
                        "Longitud total": "2,055 mm",
                        "Ancho total": "690 mm",
                        "Altura total": "1,165 mm",
                        "Altura al asiento": "860 mm",
                        "Distancia entre ejes": "1,405 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "202 kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/super-deportivas/R6RACE.webp",
                    "name": "R6 RACE",
                    "category": "motocicletas",
                    "subcategory": "super deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, 4 Cilindros, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "599 c.c.",
                        "Caballaje": "118.4 Hp",
                        "Revolucion": "14,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Eléctrico",
                        "Sistema de alimentación": "Inyección Electrónica",
                        "Capacidad de combustible": "4.49 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "120/70 ZR17M/C (58W)",
                        "Neumático trasero": "180/55 ZR17M/C (73W)",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Brazo Oscilante"
                    },
                    "dimensions": {
                        "Longitud total": "1,990 mm",
                        "Ancho total": "695 mm",
                        "Altura total": "1,150 mm",
                        "Altura al asiento": "850 mm",
                        "Distancia entre ejes": "1,375 mm",
                        "Distancia mínima al suelo": "130 mm",
                        "Peso total con líquidos": "185 Kg"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/super-deportivas/R3.webp",
                    "name": "R3",
                    "category": "motocicletas",
                    "subcategory": "super deportivas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, Bicilindrico, DOHC",
                        "Refrigeración": "por liquido",
                        "Cilindrada": "321 c.c.",
                        "Caballaje": "41 Hp",
                        "Revolucion": "10,750 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "6 velocidades",
                        "Arranque": "Electrico",
                        "Sistemadealimentacion": "Inyección Electrónica",
                        "Capacidad de combustible": "3.7 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "110/70-17M/C 54H",
                        "Neumático trasero": "140/70-17M/C 66H",
                        "Suspensión delantera": "Horquilla telescopica invertida",
                        "Suspensión trasera": "Brazo Oscilante"
                    },
                    "dimensions": {
                        "Longitud total": "2,090 mm",
                        "Ancho total": "730 mm",
                        "Altura total": "1,140 mm",
                        "Altura al asiento": "780 mm",
                        "Distancia entre ejes": "1,380 mm",
                        "Distanciaminimaalsuelo": "160 mm",
                        "Pesototalconliquidos": "374 libras"
                    }
                },
            ],
            "urbanas": [
                {
                    "image": "/assets/images/products/motocicletas/urbanas/YBR125ED.webp",
                    "name": "YBR125ED",
                    "category": "motocicletas",
                    "subcategory": "urbanas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, monocilindros SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "125 c.c.",
                        "Caballaje": "10 Hp",
                        "Revolucion": "8,000 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "5 velocidades",
                        "Arranque": "Electrico y Patada",
                        "Sistemadealimentacion": "Caburador"
                    },
                    "chassis": {
                        "Freno delantero": "Disco",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2-75 – 18 42 P",
                        "Neumático trasero": "90/90 – 18 57p",
                        "Suspensión delantera": "Horquilla telescopica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "1,980 mm",
                        "Ancho total": "745 mm",
                        "Altura total": "1,050 mm",
                        "Altura al asiento": "780 mm",
                        "Distancia entre ejes": "1,290 mm",
                        "Distanciaminimaalsuelo": "160 mm",
                        "Pesototalconliquidos": "266 libras"
                    }
                },
                {
                    "image": "/assets/images/products/motocicletas/urbanas/CRUX.webp",
                    "name": "CRUX",
                    "category": "motocicletas",
                    "subcategory": "urbanas",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "Blue Core, 4 Tiempos, SOHC",
                        "Refrigeración": "por aire",
                        "Cilindrada": "110 c.c.",
                        "Caballaje": "7.5 Hp",
                        "Revolución": "7,500 rpm",
                        "Transmisión Final": "Cadena",
                        "Velocidades": "4 velocidades",
                        "Arranque": "Eléctrico y Patada",
                        "Sistema de alimentación": "Carburador",
                        "Capacidad de combustible": "2.9 Galones"
                    },
                    "chassis": {
                        "Freno delantero": "Fricción",
                        "Freno trasero": "Fricción",
                        "Tipo de aros": "Magnesio",
                        "Neumático delantero": "2.50 x 18 4PR",
                        "Neumático trasero": "2.75 x 18 6PR",
                        "Suspensión delantera": "Horquilla telescópica",
                        "Suspensión trasera": "Doble Amortiguador"
                    },
                    "dimensions": {
                        "Longitud total": "2,000 mm",
                        "Ancho total": "735 mm",
                        "Altura total": "1,075 mm",
                        "Altura al asiento": "780 mm",
                        "Distancia entre ejes": "",
                        "Distancia mínima al suelo": "160 mm",
                        "Peso total con líquidos": "249 libras"
                    }
                },
            ],
        },
    },
    {
    category: "side by side and atvs",
    subcategories: {
            "atv": [
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/atv/KODIAK450.webp",
                    "name": "KODIAK 450",
                    "category": "side by side and atvs",
                    "subcategory": "atv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "421 c.c.",
                        "Alimentación": "Inyección electrónica",
                        "Trasmisión": "Automática",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Doble Disco",
                        "Tipo de aros": "Aluminio",
                        "Neumáticos": "25/8-12 – 25/10-12",
                        "Suspensión delantera": "Doble horquilla independiente",
                        "suspensión trasera": "Doble horquilla independiente",
                        "Capacidad de tanque": "3.7  galones"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/atv/RAPTOR50.webp",
                    "name": "RAPTOR 50",
                    "category": "side by side and atvs",
                    "subcategory": "atv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "Aire",
                        "Cilindrada": "49.4 c.c.",
                        "Transmisión Final": "Automática",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Doble Tambor",
                        "Freno trasero": "Tambor simple",
                        "Tipo de aros": "Convecionales",
                        "Neumáticos": "16×6.5-7  /  16×7-7",
                        "Suspensión delantera": "Independiente sobre trapecios simples",
                        "Suspensión trasera": "Eje rígido con monoamortiguador",
                        "Capacidad de tanque": "5.8 litros"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/atv/RAPTOR700.webp",
                    "name": "RAPTOR 700",
                    "category": "side by side and atvs",
                    "subcategory": "atv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, DOHC",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "686 c.c.",
                        "Alimentación": "A",
                        "Transmisión Final": "5 velocidades + Retroceso",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Disco",
                        "Tipo de aros": "Convesionales",
                        "Neumáticos": "AT21x7-10 — AT20x10-9",
                        "Suspensión delantera": "Independiente, dobles trapecios",
                        "suspensión trasera": "Eje rígido con monoamortiguador",
                        "Capacidad de tanque": "11 litros"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/atv/GRIZZLY700.webp",
                    "name": "GRIZZLY 700",
                    "category": "side by side and atvs",
                    "subcategory": "atv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, DOHC, 4WD",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "686 c.c.",
                        "Alimentación": "Inyección electrónica",
                        "Trasmisión": "Automática, EPS",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Doble Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumáticos": "AT26 x 8-12 — AT26 x 10-12",
                        "Suspensión delantera": "Doble horquilla independiente",
                        "suspensión trasera": "Doble horquilla independiente",
                        "Capacidad de tanque": "18 litros"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/atv/RAPTOR90.webp",
                    "name": "RAPTOR 90",
                    "category": "side by side and atvs",
                    "subcategory": "atv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC",
                        "Refrigeración": "Aire",
                        "Cilindrada": "90 c.c.",
                        "Transmisión Final": "Automática — 2WD",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Doble Tambor",
                        "Freno trasero": "Tambor",
                        "Tipo de aros": "Convecionales",
                        "Neumáticos": "AT18 x 7-8 — AT18 x 9-8",
                        "Suspensión delantera": "Independiente sobre trapecios simples",
                        "Suspensión trasera": "Eje rígido con monoamortiguador",
                        "Capacidad de tanque": "4.8 litros"
                    }
                }
            ],
            "utv": [
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/utv/RMAX2.webp",
                    "name": "RMAX 2",
                    "category": "sidebyside-y-atvs",
                    "subcategory": "utv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, DOHC, Parallel Twin",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "999 c.c.",
                        "Sistema de lubricación": "Cárter seco",
                        "Trasmisión": "Yamaha Ultramatic® CVT automatic V-belt",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Disco hidráulico ventilado doble",
                        "Freno trasero": "Disco hidráulico ventilado doble, Freno de estacionamiento montado en el eje",
                        "Neumáticos delanteros": "29×9-14",
                        "Neumáticos traseros": "30×10-14",
                        "Suspensión delantera": "Independiente sobre dobles trapecios con barra estabilizadora",
                        "Suspensión trasera": "Independiente sobre dobles trapecios con barra estabilizadora",
                        "Capacidad de combustible": "35 litros"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/utv/VIKINGVI.webp",
                    "name": "Viking VI Ranch Edition",
                    "category": "sidebyside-y-atvs",
                    "subcategory": "utv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 Tiempos, SOHC, (4 válvulas) 4WD",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "686 c.c.",
                        "Alimentación": "Inyección electrónica",
                        "Trasmisión": "Ultramatic V-belt",
                        "Arranque": "Eléctrico TCI",
                        "Freno delantero": "Doble Disco",
                        "Freno trasero": "Doble Disco",
                        "Tipo de aros": "Magnesio",
                        "Neumáticos": "AT25 x 8-12 — AT25 x 10-12",
                        "Suspensión delantera": "Independiente, dobles trapecios",
                        "Suspensión trasera": "Independiente sobre dobles trapecios con barra estabilizadora",
                        "Capacidad de combustible": "9.7 Galones"
                    }
                },
                {
                    "image": "/assets/images/products/sidebyside-y-atvs/utv/RMAX4.webp",
                    "name": "RMAX 4",
                    "category": "sidebyside-y-atvs",
                    "subcategory": "utv",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Motor": "4 tiempos, DOHC, Parallel Twin",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "999 c.c.",
                        "Sistema de lubricación": "Cárter seco",
                        "Trasmisión": "Yamaha Ultramatic® CVT automatic V-belt",
                        "Arranque": "Eléctrico",
                        "Freno delantero": "Disco hidráulico ventilado doble",
                        "Freno trasero": "Disco hidráulico ventilado doble, Freno de estacionamiento montado en el eje",
                        "Neumáticos delanteros": "AT29 x 9-14 GBC® Dirt Commander®",
                        "Neumáticos traseros": "AT29 x 11-14 GBC® Dirt Commander®",
                        "Suspensión delantera": "Independiente sobre dobles trapecios con barra estabilizadora",
                        "Suspensión trasera": "Independiente sobre dobles trapecios con barra estabilizadora",
                        "Capacidad de combustible": "35 litros"
                    }
                }
            ],
        },
    },
    {
        category: "motores marinos",
        subcategories: {
            "dos tiempos": [
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/200AETX.webp",
                    "name": "200AETX",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, V6",
                        "Refrigeración": "Por Liquido",
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
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/85AETL.webp",
                    "name": "85AETL",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 3 cilindros",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "1140 c.c.",
                        "Caballaje": "85 Hp",
                        "Inducción del combustible": "Carburación (3)",
                        "Dirección": "Hidráulico",
                        "Arranque": "Eléctrico",
                        "Capacidad de tanque": "6.6m Gal",
                        "Peso": "111 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "35-L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E75BMHDL.webp",
                    "name": "E75BMHDL",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 3 cilindro",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "1140 c.c.",
                        "Caballaje": "75 Hp",
                        "Inducción del combustible": "Carburación (3)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 Gal",
                        "Peso": "121 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "31-L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E75BMHDY.webp",
                    "name": "E75BMHDY",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 3 cilindros",
                        "Refrigeracion": "Por Liquido",
                        "Cilindrada": "1140 c.c.",
                        "Caballaje": "75 Hp",
                        "Induccion del combustible": "Carburacion (3)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 litros",
                        "Peso": "115 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "31-L/H",
                        "Contrarrotacion": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E40XMHL.webp",
                    "name": "E40XMHL",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 2 cilindros",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "703 c.c.",
                        "Caballaje": "40 Hp",
                        "Inducción del combustible": "Carburacion (1)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 Gal",
                        "Peso": "73.6 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "20- L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E25BMHS.webp",
                    "name": "E25BMHS",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 2 cilindros",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "496 c.c.",
                        "Caballaje": "25 Hp",
                        "Inducción del combustible": "Carburación (1)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 Gal",
                        "Peso": "52 Kg",
                        "Pata": "Pata Corta",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "10.7 L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E15DMHS.webp",
                    "name": "E15DMHS",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 2 cilindro",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "246 c.c.",
                        "Caballaje": "15 Hp",
                        "Inducción del combustible": "Carburación (1)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 Gal",
                        "Peso": "40 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "7.7-L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/E8DMHS.webp",
                    "name": "E8DMHS",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 2 cilindro",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "165 c.c.",
                        "Caballaje": "8 Hp",
                        "Inducción del combustible": "Carburación (1)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "6.6 Gal",
                        "Peso": "29 Kg",
                        "Pata": "Pata Corta",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "4 L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/dos-tiempos/4CMHS.webp",
                    "name": "4CMHS",
                    "category": "motores marinos",
                    "subcategory": "dos tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "2 Tiempos, 1 cilindro",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "103 c.c.",
                        "Caballaje": "4 Hp",
                        "Inducción del combustible": "Carburación (1)",
                        "Dirección": "Maneral",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "2.8 litros",
                        "Peso": "21 Kg",
                        "Pata": "Pata Corta",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "2.2 L/H",
                        "Contra rotación": ""
                    }
                }
            ],
            "cuatro tiempos": [
                {
                    "image": "/assets/images/products/motores-marinos/cuatro-tiempos/F115BETL.webp",
                    "name": "F115BETL",
                    "category": "motores marinos",
                    "subcategory": "cuatro tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 4 cilindros, DOHC",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "1832 c.c.",
                        "Caballaje": "115 Hp",
                        "Inducción del combustible": "Inyección",
                        "Dirección": "Hidráulico",
                        "Arranque": "Eléctrico",
                        "Capacidad de tanque": "",
                        "Peso": "177 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "28-L/H",
                        "Contra rotación": ""
                    }
                },
                {
                    "image": "/assets/images/products/motores-marinos/cuatro-tiempos/F70AETL.webp",
                    "name": "F70AETL",
                    "category": "motores marinos",
                    "subcategory": "cuatro tiempos",
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 4 cilindros, SOHC",
                        "Refrigeración": "Por Liquido",
                        "Cilindrada": "996 c.c.",
                        "Caballaje": "70 Hp",
                        "Inducción del combustible": "Inyección",
                        "Dirección": "Hidráulico",
                        "Arranque": "Eléctrico",
                        "Capacidad de tanque": "",
                        "Peso": "119 Kg",
                        "Pata": "Pata Larga",
                        "Combustible": "Gasolina",
                        "Consumo Max Combustible": "21.2-L/H",
                        "Contra rotación": ""
                    }
                }
            ]
        },
    },
    {
        category: "wave runners",
        subcategories: {
            null: [
                {
                    "image": "/assets/images/products/wave-runners/SUPERJET2024.webp",
                    "name": "SUPERJET 2024",
                    "category": "wave runners",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 3 Cilindros DOHC",
                        "Refrigeración": "Por liquido",
                        "Cilindrada": "1,049 cc",
                        "Connext": "N/A",
                        "Audio": "N/A",
                        "Capacidad de tanque": "5 Galones",
                        "Peso": "170 Kg",
                        "Reversa": "N/A",
                        "Pasajeros": "1",
                        "Sistema": "Inyección Electrónica"
                    }
                },
                {
                    "image": "/assets/images/products/wave-runners/VXCRUISERHO.webp",
                    "name": "VX CRUISER HO",
                    "category": "wave runners",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 4 Cilindros, DOHC",
                        "Refrigeración": "Por liquido",
                        "Cilindrada": "1,898 cc",
                        "Connext": "Pantalla de 4.3″, control manual",
                        "Arranque": "Eléctrico",
                        "Capacidad de tanque": "18.5 Galones",
                        "Peso": "354 Kg",
                        "Retrovisores": "Doble",
                        "Pasajeros": "1 a 3",
                        "Sistema": "Inyección Electrónica"
                    }
                },
                {
                    "image": "/assets/images/products/wave-runners/VXCRUISER.webp",
                    "name": "VX CRUISER",
                    "category": "wave runners",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 3 Cilindros, DOHC",
                        "Refrigeración": "Por liquido",
                        "Cilindrada": "1,049 cc",
                        "Arranque": "Eléctrico",
                        "Capacidad de tanque": "18.5 Galones",
                        "Peso": "312 Kg",
                        "Combustible": "Gasolina",
                        "Pasajeros": "1 a 3",
                        "Sistema": "Inyección Electrónica"
                    }
                },
                {
                    "image": "/assets/images/products/wave-runners/FXCRUISERSVHO.webp",
                    "name": "FX CRUISER SVHO",
                    "category": "wave runners",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 4 Cilindros, DOHC  Super Vortex",
                        "Refrigeración": "Por liquido",
                        "Cilindrada": "1,812 cc Supercargada",
                        "Connext": "Pantalla de 7″, touchscreen",
                        "Audio": "2 Bocinas Bluetooth",
                        "Capacidad de tanque": "18.5 Galones",
                        "Peso": "397 Kg",
                        "Reversa": "RiDE con control de tracción",
                        "Pasajeros": "1 a 3",
                        "Sistema": "Inyección Electrónica"
                    }
                },
                {
                    "image": "/assets/images/products/wave-runners/FXSVHO.webp",
                    "name": "FX SVHO",
                    "category": "wave runners",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, 4 Cilindros, DOHC  Super Vortex",
                        "Refrigeración": "Por liquido",
                        "Cilindrada": "1,812 cc Supercargada",
                        "Connext": "Pantalla de 7″, touchscreen",
                        "Audio": "2 Bocinas Bluetooth",
                        "Capacidad de tanque": "18.5 Galones",
                        "Peso": "397 Kg",
                        "Reversa": "RiDE con control de tracción",
                        "Pasajeros": "1 a 3",
                        "Sistema": "Inyección Electrónica"
                    }
                }
            ]
        }
    },
    {
        category: "bombas de agua",
        subcategories: {
            null: [
                {
                    "image": "/assets/images/products/bombas-de-agua/YP30C.webp",
                    "name": "YP30C",
                    "category": "bombas de agua",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 Tiempos, OHV",
                        "Refrigeración": "Por aire forzada",
                        "Cilindrada": "179 c.c.",
                        "Caballaje": "4 .2Hp",
                        "Transmisión": "",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "0.9 Galones",
                        "Combustible": "Gasolina",
                        "Peso": "28.7 Kg"
                    }
                },
                {
                    "image": "/assets/images/products/bombas-de-agua/YP20C.webp",
                    "name": "YP20C",
                    "category": "bombas de agua",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "Tipo de motor": "4 tiempos, OHV",
                        "Refrigeración": "Por aire forzada",
                        "Cilindrada": "179 c.c.",
                        "Caballaje": "4.2 Hp",
                        "Trasmisión": "",
                        "Arranque": "Manual",
                        "Capacidad de tanque": "0.9 Galones",
                        "Combustible": "Gasolina",
                        "Peso": "25.2 Kg"
                    }
                }
            ]
        }
    },
    {
        category: "generadores",
        subcategories: {
            null: [
                {
                    "image": "/assets/images/products/generadores/MZ175B2B.webp",
                    "name": "MZ175B2B",
                    "category": "generadores",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                     "technicalInformation": {
                        "TIPO": "Generador de CA sincrónico/monofásico",
                        "Tensión (V)": "120",
                        "Frecuencia (Hz)": "60",
                        "Potencia nominal (kVA)": "0,8",
                        "Potencia máxima (kVA)": "0,96",
                        "Salida de corriente continua": "12V / 8.3A"
                    }
                },
                {
                    "image": "/assets/images/products/generadores/EF7200DE.webp",
                    "name": "EF7200DE",
                    "category": "generadores",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "TIPO": "Generador de CA sin escobillas/monofásico",
                        "Tensión (V)": "120/240",
                        "Frecuencia (Hz)": "60",
                        "Potencia nominal (kVA)": "6",
                        "Potencia máxima (kVA)": "7,2",
                        "Salida de corriente continua": "x"
                    }
                },
                {
                    "image": "/assets/images/products/generadores/EF2600D.webp",
                    "name": "EF2600D",
                    "category": "generadores",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "TIPO": "Generador de CA sin escobillas/monofásico",
                        "Tensión (V)": "120/240",
                        "Frecuencia (Hz)": "60",
                        "Potencia nominal (kVA)": "2,3",
                        "Potencia máxima (kVA)": "2,6",
                        "Salida de corriente continua": "12V / 8.3A"
                    }
                },
                {
                    "image": "/assets/images/products/generadores/ET-1.webp",
                    "name": "ET-1",
                    "category": "generadores",
                    "subcategory": null,
                    "discount": null,
                    "isNew": false,
                    "technicalInformation": {
                        "TIPO": "Generador de CA sincrónico/monofásico",
                        "Tensión (V)": "120",
                        "Frecuencia (Hz)": "60",
                        "Potencia nominal (kVA)": "0,8",
                        "Potencia máxima (kVA)": "0,96",
                        "Salida de corriente continua": "12V / 8.3A"
                    }
                }
            ]
        }
    }
]

export default products