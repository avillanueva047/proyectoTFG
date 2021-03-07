var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:wind_sensor",
    "title": "wind_sensor",
    "@type": "acg:wind_sensor",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "speed": {
            "type": "object",
            "properties": {
                "distance": {
                    "type": "string",
                    "measure": "m"
                },
                "time": {
                    "type": "string",
                    "measure": "s"
                },
                "value":{
                    "type": "number",
                    "minimun": 0,
                    "maximun": 60
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/wind_sensor/wind_sensor/speed",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;