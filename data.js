var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-inicial",
      "name": "Vista Inicial",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.110605980491078,
          "pitch": 0.24434234813416467,
          "rotation": 0,
          "target": "1-puerta"
        },
        {
          "yaw": -0.10038766550351852,
          "pitch": 0.48247590445649635,
          "rotation": 0,
          "target": "2-pizarra-digital"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.880039630065916,
          "pitch": 0.32506366200400727,
          "title": "Ordenador de Altas Prestaciones<br>",
          "text": "Text"
        },
        {
          "yaw": 1.9960722789019938,
          "pitch": 0.416252114809609,
          "title": "Photocall",
          "text": "Text"
        },
        {
          "yaw": -3.021135408889428,
          "pitch": 0.25597996945499446,
          "title": "Aula EMPREN<br>",
          "text": "Haz click en la flecha para abrir la puerta<br>"
        }
      ]
    },
    {
      "id": "1-puerta",
      "name": "Puerta",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.015201254775432105,
        "pitch": 0.33269814740460646,
        "fov": 1.318910512925402
      },
      "linkHotspots": [
        {
          "yaw": -0.022094134817280064,
          "pitch": 0.29583715227843754,
          "rotation": 6.283185307179586,
          "target": "3-acceder-al-aula-empren"
        },
        {
          "yaw": 3.097120426046329,
          "pitch": 0.3389138708253423,
          "rotation": 0,
          "target": "2-pizarra-digital"
        },
        {
          "yaw": 3.135674495747697,
          "pitch": 0.9771454623730396,
          "rotation": 0,
          "target": "0-vista-inicial"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.287107121526354,
          "pitch": 0.30314913506672525,
          "title": "Photocall<br>",
          "text": "Text"
        },
        {
          "yaw": 0.16115513993040054,
          "pitch": 0.3012314576974493,
          "title": "Aula EMPREN<br>",
          "text": "Haz click en la flecha para acceder al aula EMPREN.<br>"
        }
      ]
    },
    {
      "id": "2-pizarra-digital",
      "name": "Pizarra digital",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1412218205009044,
        "pitch": 0.22848980670537955,
        "fov": 1.318910512925402
      },
      "linkHotspots": [
        {
          "yaw": -0.20194815751206185,
          "pitch": 0.6293568662691396,
          "rotation": 0,
          "target": "0-vista-inicial"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1074139961275566,
          "pitch": 0.573782138321457,
          "title": "Pizarra táctil<br>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-acceder-al-aula-empren",
      "name": "Acceder al aula EMPREN",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.042872444175305446,
        "pitch": 0.4029936527271101,
        "fov": 1.318910512925402
      },
      "linkHotspots": [
        {
          "yaw": 3.069445307679473,
          "pitch": 0.5522549943412294,
          "rotation": 0,
          "target": "1-puerta"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0330225509371953,
          "pitch": 0.5445881123270322,
          "title": "Aula ATECA<br>",
          "text": "Haz click en la flecha para volver al aula ATECA<br>"
        }
      ]
    },
    {
      "id": "4-ateca5",
      "name": "ateca5",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "ProyectoATECA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
