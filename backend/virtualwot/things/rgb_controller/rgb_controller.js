var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:rgb_controller",
    "title": "rgb_controller",
    "@type": "acg:rgb_controller",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "status": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "boolean"
                },
            },
            "required": [
                "status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/rgb_controller/rgb_controller/status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
        "rgb": {
            "type": "object",
            "properties": {
                "values": {
                    "type": "array",
                    "items": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                    },
                    "minItems": 3,
                    "maxItems": 3
                } 
            },
            "required": [
                "values",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/rgb_controller/rgb_controller/values",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        }
    },
    "action" : {
        "switch" : {
            "title" : "RGB Light Switch",
            "description" : "Turns On / Off the RGB Light",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "output"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/rgb_controller/rgb_controller/switch",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "setcolor" : {
            "title" : "Set Color Light",
            "description" : "Set the color of the light by giving an array of 3 values",
            "input" : {
                "type": "object",
                "properties": {
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                        },
                        "minItems": 3,
                        "maxItems": 3
                    } 
                },
                "required": [
                    "values"
                ],
            },
            "output" : {
                "type" : "object",
                "properties": {
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 255
                        },
                        "minItems": 3,
                        "maxItems": 3
                    } 
                },
                "required": [
                    "values"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/rgb_controller/rgb_controller/setcolor",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
    },
    "links": []
}
module.exports = td;