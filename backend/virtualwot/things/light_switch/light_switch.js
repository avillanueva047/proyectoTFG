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
        "state": {
            "type": "object",
            "properties": {
                "state": {
                    "type": "boolean",
                    "on": true,
                    "off": false
                }
            },
            "required": [
                "state",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/light_switch/light_switch/state",
                "contentType": "application/json"
            }],
        },
    },
    "links": []
}
module.exports = td;