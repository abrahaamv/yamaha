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
        "image":  "/assets/images/products/motocicletas/deportivas/MT-15.webp",
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
          image: "/assets/images/products/motocicletas/sport-touring/TRACER900GT.webp",
          name: "TRACER 900 GT",
          category: "motocicletas",
          subcategory: "sport touring",
          description: "Tecnología avanzada para un viaje deportivo.",
          discount: null,
          isNew: false,
          technicalInformation: {
            Motor: "4 Tiempos, Bicilíndrico, DOHC",
            Refrigeración: "Por líquido",
            Cilindrada: "321 c.c.",
            Caballaje: "41 Hp",
            Revolución: "10,750 RPM",
            TransmisiónFinal: "Cadena",
            Velocidades: "6 velocidades",
            Arranque: "Eléctrico",
            SistemaDeAlimentación: "Inyección Electrónica",
            CapacidadDeCombustible: "3.7 Galones",
          },
          chassis: {
            FrenoDelantero: "Disco",
            FrenoTrasero: "Disco",
            TipoDeAros: "Magnesio",
            NeumáticoDelantero: "110/70-17M/C 54H",
            NeumáticoTrasero: "140/70-17M/C 66H",
            SuspensiónDelantera: "Horquilla telescópica",
            SuspensiónTrasera: "Brazo Basculante",
          },
          dimensions: {
            LongitudTotal: "2,090 mm",
            AnchoTotal: "745 mm",
            AlturaTotal: "1,035 mm",
            AlturaAlAsiento: "780 mm",
            DistanciaEntreEjes: "1,350 mm",
            DistanciaMinimaAlSuelo: "160 mm",
            PesoTotalConLíquidos: "363 libras",
          },
        },
      ],
      "super deportivas": [
        {
          image: "/assets/images/products/motocicletas/super-deportivas/R6RACE.webp",
          name: "R6 RACE",
          category: "motocicletas",
          subcategory: "super deportivas",
          description: "Velocidad y agilidad para carreras.",
          discount: null,
          isNew: false,
          technicalInformation: {
            Motor: "4 Tiempos, Bicilíndrico, DOHC",
            Refrigeración: "Por líquido",
            Cilindrada: "321 c.c.",
            Caballaje: "41 Hp",
            Revolución: "10,750 RPM",
            TransmisiónFinal: "Cadena",
            Velocidades: "6 velocidades",
            Arranque: "Eléctrico",
            SistemaDeAlimentación: "Inyección Electrónica",
            CapacidadDeCombustible: "3.7 Galones",
          },
          chassis: {
            FrenoDelantero: "Disco",
            FrenoTrasero: "Disco",
            TipoDeAros: "Magnesio",
            NeumáticoDelantero: "110/70-17M/C 54H",
            NeumáticoTrasero: "140/70-17M/C 66H",
            SuspensiónDelantera: "Horquilla telescópica",
            SuspensiónTrasera: "Brazo Basculante",
          },
          dimensions: {
            LongitudTotal: "2,090 mm",
            AnchoTotal: "745 mm",
            AlturaTotal: "1,035 mm",
            AlturaAlAsiento: "780 mm",
            DistanciaEntreEjes: "1,350 mm",
            DistanciaMinimaAlSuelo: "160 mm",
            PesoTotalConLíquidos: "363 libras",
          },
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
        atv: [
        {
            image: "/assets/images/products/sidebyside-y-atvs/atv/RAPTOR700.webp",
            name: "RAPTOR 700",
            category: "side by side and atvs",
          subcategory: "atv",
            description: null,
            discount: null,
            isNew: false,
            technicalInformation: {
              Motor: "4 Tiempos, Bicilíndrico, DOHC",
              Refrigeración: "Por líquido",
              Cilindrada: "689 c.c.",
              Caballaje: "67.0 Hp",
              Revolución: "9000 RPM",
              TransmisiónFinal: "Cadena",
              Velocidades: "6 velocidades",
              Arranque: "Eléctrico",
              SistemaDeAlimentación: "Inyección Electrónica",
              CapacidadDeCombustible: "4.3 Galones",
          },
            chassis: {
              FrenoDelantero: "Doble Disco",
              FrenoTrasero: "Disco",
              TipoDeAros: "Rayos",
              NeumáticoDelantero: "90/90 R21M/C 54V M+S",
              NeumáticoTrasero: "150/70 R18M/C 70V M+S",
              SuspensiónDelantera: "Horquilla telescópica",
              SuspensiónTrasera: "Basculante con Monoshock",
          },
            dimensions: {
              LongitudTotal: "2,370 mm",
              AnchoTotal: "910 mm",
              AlturaTotal: "1,455 mm",
              AlturaAlAsiento: "875 mm",
              DistanciaEntreEjes: "1,595 mm",
              DistanciaMinimaAlSuelo: "240 mm",
              PesoTotalConLíquidos: "449 libras",
          },
        },
      ],
        utv: [
        {
            image: "/assets/images/products/sidebyside-y-atvs/utv/RMAX2.webp",
            name: "RMAX 2",
            category: "side by side and atvs",
          subcategory: "utv",
            description: null,
            discount: null,
            isNew: false,
            technicalInformation: {
              Motor: "4 Tiempos, Bicilíndrico, DOHC",
              Refrigeración: "Por líquido",
              Cilindrada: "689 c.c.",
              Caballaje: "67.0 Hp",
              Revolución: "9000 RPM",
              TransmisiónFinal: "Cadena",
              Velocidades: "6 velocidades",
              Arranque: "Eléctrico",
              SistemaDeAlimentación: "Inyección Electrónica",
              CapacidadDeCombustible: "4.3 Galones",
          },
            chassis: {
              FrenoDelantero: "Doble Disco",
              FrenoTrasero: "Disco",
              TipoDeAros: "Rayos",
              NeumáticoDelantero: "90/90 R21M/C 54V M+S",
              NeumáticoTrasero: "150/70 R18M/C 70V M+S",
              SuspensiónDelantera: "Horquilla telescópica",
              SuspensiónTrasera: "Basculante con Monoshock",
          },
            dimensions: {
              LongitudTotal: "2,370 mm",
              AnchoTotal: "910 mm",
              AlturaTotal: "1,455 mm",
              AlturaAlAsiento: "875 mm",
              DistanciaEntreEjes: "1,595 mm",
              DistanciaMinimaAlSuelo: "240 mm",
              PesoTotalConLíquidos: "449 libras",
          },
        },
      ],
    },
  },
  {
        category: "motores marinos",
        subcategories: {
      "dos tiempos": [
        {
            image: "/assets/images/products/motores-marinos/dos-tiempos/200AETX.webp",
            name: "200AETX",
            category: "motores marinos",
            subcategory: "dos tiempos",
            description: null,
            discount: null,
            isNew: false,
            technicalInformation: {
              Motor: "2 Tiempos, V6",
              Refrigeración: "Por líquido",
              Cilindrada: "2596 c.c.",
              Caballaje: "200 Hp",
              InducciónDelCombustible: "Carburación (3, doble)",
              Dirección: "Hidráulico",
              Arranque: "Eléctrico",
              CapacidadDeTanque: "6.6 Gal",
              Peso: "184 Kg",
              Pata: "Pata Extra Larga",
              Combustible: "Gasolina",
              ConsumoMaxCombustible: "81-L/H",
              ContraRotación: "No",
          },
        }
      ],
      "cuatro tiempos": [
        {
            image: "/assets/images/products/motores-marinos/cuatro-tiempos/F115BETL.webp",
            name: "F115BETL",
             category: "motores marinos",
            subcategory: "cuatro tiempos",
            description: null,
            discount: null,
            isNew: false,
            technicalInformation: {
              Motor: "4 Tiempos, V6",
              Refrigeración: "Por líquido",
              Cilindrada: "2596 c.c.",
              Caballaje: "200 Hp",
              InducciónDelCombustible: "Carburación (3, doble)",
              Dirección: "Hidráulico",
              Arranque: "Eléctrico",
              CapacidadDeTanque: "6.6 Gal",
              Peso: "184 Kg",
              Pata: "Pata Extra Larga",
              Combustible: "Gasolina",
              ConsumoMaxCombustible: "81-L/H",
              ContraRotación: "No",
          },
        },
      ]
    },
  },
  {
        category: "wave runners",
        subcategories: {
      null: [
        {
          image: "/assets/images/products/wave-runners/FX-SVHO.webp",
          name: "FX SVHO",
           category: "wave runners",
            subcategory: null,
          description: null,
          discount: null,
          isNew: false,
          technicalInformation: {
            Motor: "4 Tiempos, Bicilíndrico, DOHC",
            Refrigeración: "Por líquido",
            Cilindrada: "689 c.c.",
            Caballaje: "67.0 Hp",
            Revolución: "9000 RPM",
            TransmisiónFinal: "Cadena",
            Velocidades: "6 velocidades",
            Arranque: "Eléctrico",
            SistemaDeAlimentación: "Inyección Electrónica",
            CapacidadDeCombustible: "4.3 Galones",
          },
        },
      ]
    }
  },
  {
        category: "bombas de agua",
        subcategories: {
      null: [
        {
          image: "/assets/images/products/bombas-de-agua/YP30C.webp",
          name: "YP30C",
           category: "bombas de agua",
            subcategory: null,
          description: null,
          discount: null,
          isNew: false,
          technicalInformation: {
            Motor: "4 Tiempos, OHV",
            Refrigeración: "Por aire forzada",
            Cilindrada: "179 c.c.",
            Caballaje: "4.2 Hp",
            Transmisión: "No especificada",
            Arranque: "Manual",
            CapacidadDeTanque: "0.9 Gal",
            Combustible: "Gasolina",
            Peso: "28.7 Kg",
          },
        },
      ]
    }
  },
  {
        category: "generadores",
        subcategories: {
      null: [
        {
          image: "/assets/images/products/generadores/MZ175B2B.webp",
          name: "MZ175B2B",
           category: "generadores",
            subcategory: null,
          description: null,
          discount: null,
          isNew: false,
          technicalInformation: {
            Motor: "4 Tiempos, OHV",
            Refrigeración: "Por aire forzada",
            Cilindrada: "179 c.c.",
            Caballaje: "4.2 Hp",
            Transmisión: "No especificada",
            Arranque: "Manual",
            CapacidadDeTanque: "0.9 Gal",
            Combustible: "Gasolina",
            Peso: "28.7 Kg",
          },
        },
      ]
    }
  }
]

export default products