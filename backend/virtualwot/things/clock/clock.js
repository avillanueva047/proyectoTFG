var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:clock",
    "title": "clock",
    "@type": "acg:clock",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "time": {
            "type": "object",
            "properties": {
                "hour": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 23
                },
                "minute": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 59
                },
            },
            "required": [
                "time",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/clock/clock/time",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
}
module.exports = td;