var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:light_hub",
    "title": "light_hub",
    "@type": "acg:light_hub",
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
                "values":{
                    "type": "array",
                    "items": {
                        "type": "boolean"
                    },
                    "minItems": 4,
                    "maxItems": 4
                },
            },
            "required": [
                "values",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/light_hub/light_hub/status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        },
    },
    "action" : {
        "switch" : {
            "title" : "Switch Hub Light",
            "description" : "Switches ON / OFF of a light in the Hub",
            "input" : {
                "type" : "object",
                "properties": {
                    "position": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 4
                    }
                },
                "required": [
                    "position"
                ],
            },
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "object",
                        "properties": {
                            "values":{
                                "type": "array",
                                "items": {
                                    "type": "boolean"
                                },
                                "minItems": 4,
                                "maxItems": 4
                            },
                        },
                        "required": [
                            "values",
                        ],
                    },
                },
                "required": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/light_switch/light_switch/switch",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        }
    },
    "links": []
}
module.exports = td;