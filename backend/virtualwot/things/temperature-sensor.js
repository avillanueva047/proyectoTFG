var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:temperature-sensor",
    "title": "temperature-sensor",
    "@type": "acg:tempsensor",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "temp": {
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
                "href": "http://localhost:9000/virtual/temperature-sensor/property/temp",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;