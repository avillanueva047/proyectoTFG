var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:humidity_sensor",
    "title": "humidity_sensor",
    "@type": "acg:humidity_sensor",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "percentage": {
            "type": "object",
            "properties": {
                "percentage": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 100
                }
            },
            "required": [
                "percentage",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/humidity_sensor/humidity_sensor/percentage",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;