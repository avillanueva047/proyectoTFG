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
                    "unit": "m",
                    "description": "Unit of distant, meters in this case"
                },
                "time": {
                    "type": "string",
                    "unit": "s",
                    "description": "Unit measure of time, seconds in this case"
                },
                "value":{
                    "type": "number",
                    "minimun": 0,
                    "maximun": 60
                }
            },
            "required": [
                "speed",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/wind_sensor/wind_sensor/speed",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;