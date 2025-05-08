var APP_DATA = {
  "scenes": [
    {
      "id": "0-dry-area",
      "name": "Dry Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9662102107066062,
        "pitch": 0.028130814226930312,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -0.549080903405601,
          "pitch": 0.23657368500310128,
          "rotation": 0,
          "target": "1-wet-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-wet-area",
      "name": "Wet Area",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07139482664654473,
        "pitch": 0.07104468111238305,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.2009979598216916,
          "pitch": 0.10053490235857865,
          "rotation": 0,
          "target": "0-dry-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Toilet 360 Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
