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
                    "{readproperty}",
                ],
                "href": "http://localhost:9000/virtual/rgb_controller/rgb_controller/status",
                "contentType": "application/json"
            }],

        },
        "rgb": {
            "type": "object",
            "properties": {
                "values": {
                    "type": "array",
                    "items": {
                        "type": "number",
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
        }
    },
    "links": []
}
module.exports = td;