var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:temperature_celsius",
    "title": "temperature_celsius",
    "@type": "acg:temperature_sensor",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "temperature": {
            "type": "object",
            "properties": {
                "value": {
                    "@type": "C",
                    "type": "number",
                    "minimum": -30,
                    "maximum": 60
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/temperature_sensor/temperature_celsius/temperature",
                "contentType": "application/json"
            }],
        },
    },
    "links": []
}
module.exports = td;