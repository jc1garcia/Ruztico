var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": -0.006870317849703156,
          "pitch": 0.23186483493581989,
          "rotation": 0,
          "target": "1-parqueadero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-parqueadero",
      "name": "Parqueadero",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1398336623816165,
          "pitch": 0.139552317600538,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 0.056127029233898895,
          "pitch": 0.17556405684659282,
          "rotation": 0,
          "target": "2-entrada-ruztico"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-ruztico",
      "name": "Entrada Ruztico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9703324397761168,
          "pitch": 0.25532995810975123,
          "rotation": 0,
          "target": "1-parqueadero"
        },
        {
          "yaw": -2.2610324559862782,
          "pitch": 0.336308939628541,
          "rotation": 0,
          "target": "3-piscina"
        },
        {
          "yaw": -1.9804053799376824,
          "pitch": -0.08762760982206608,
          "rotation": 4.71238898038469,
          "target": "5-entrada-glamping"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-piscina",
      "name": "Piscina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.815598068991001,
        "pitch": 0.508593347060275,
        "fov": 1.1678810529903434
      },
      "linkHotspots": [
        {
          "yaw": -1.2739520496303278,
          "pitch": 0.2891144884307444,
          "rotation": 0,
          "target": "2-entrada-ruztico"
        },
        {
          "yaw": 1.758831963283642,
          "pitch": 0.2756499536951349,
          "rotation": 0.7853981633974483,
          "target": "4-hamacas"
        },
        {
          "yaw": 1.7402519332576567,
          "pitch": -0.11199392019262788,
          "rotation": 0,
          "target": "5-entrada-glamping"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-hamacas",
      "name": "Hamacas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14275429117224903,
          "pitch": 0.40899218388699765,
          "rotation": 0.7853981633974483,
          "target": "3-piscina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrada-glamping",
      "name": "Entrada Glamping",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.628995087576321,
          "pitch": 0.5781998676265481,
          "rotation": 5.497787143782138,
          "target": "3-piscina"
        },
        {
          "yaw": 2.4615475989379094,
          "pitch": 0.5741929056891966,
          "rotation": 0.7853981633974483,
          "target": "6-habitacion"
        },
        {
          "yaw": 0.2139421619949342,
          "pitch": 0.22814764636266993,
          "rotation": 4.71238898038469,
          "target": "2-entrada-ruztico"
        },
        {
          "yaw": 2.857760259927322,
          "pitch": 0.2184154314208353,
          "rotation": 1.5707963267948966,
          "target": "7-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-habitacion",
      "name": "Habitacion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20313150076694875,
          "pitch": 0.37344082620787766,
          "rotation": 5.497787143782138,
          "target": "5-entrada-glamping"
        },
        {
          "yaw": 2.3491642157291057,
          "pitch": 0.5804301503023623,
          "rotation": 0.7853981633974483,
          "target": "7-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9263887997585396,
          "pitch": 0.6273116577823927,
          "rotation": 5.497787143782138,
          "target": "6-habitacion"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ruztico",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
