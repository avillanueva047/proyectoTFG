var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:dimmer_controller",
    "title": "dimmer_controller",
    "@type": "acg:dimmer_controller",
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
                    "type": "boolean",
                    "on": true,
                    "off": false
                },
            },
            "required": [
                "status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/status",
                "contentType": "application/json"
            }],

        },
        "brightness":{
            "type": "object",
            "properties": {
                "intensity": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                },
            },
            "required": [
                "intensity",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/brightness",
                "contentType": "application/json"
            }],
        }
    },
    "links": [{
        
    }]
}
module.exports = td;