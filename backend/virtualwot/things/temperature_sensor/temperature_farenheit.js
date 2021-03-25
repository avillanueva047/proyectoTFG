var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:temperature_farenheit",
    "title": "temperature_farenheit",
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
                    "@type": "F",
                    "type": "number",
                    "minimum": -22,
                    "maximum": 140
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/temperature_sensor/temperature_farenheit/temperature",
                "contentType": "application/json"
            }],
        },
    },
    "links": [{
        "interface-01": "http://localhost:4200/temperature/temperature-01",
        "interface-02": "http://localhost:4200/temperature/temperature-02",
        "interface-03": "http://localhost:4200/temperature/temperature-03"
    }]
}
module.exports = td;