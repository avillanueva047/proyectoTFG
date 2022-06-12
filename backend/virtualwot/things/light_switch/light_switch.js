var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:light_switch",
    "title": "light_switch",
    "@type": "acg:light_switch",
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
                }
            },
            "required": [
                "status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/light_switch/light_switch/status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        },
    },
    "action" : {
        "switch" : {
            "title" : "Switch On Light",
            "description" : "Switches on the light bulb",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
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
        },
    },
    "links": []
}
module.exports = td;