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
                    "type": "boolean",
                    "on": true,
                    "off": false
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
                "contentType": "application/json"
            }],
        },
    },
    "links": []
}
module.exports = td;