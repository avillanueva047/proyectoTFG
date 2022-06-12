var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:heart_rate",
    "title": "heart_rate",
    "@type": "acg:heart_rate",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "lecture": {
            "type": "object",
            "properties": {
                "reading": {
                    "type": "integer",
                    "minimum": 60,
                    "maximum": 220
                }
            },
            "required": [
                "reading",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/heart_rate/heart_rate/lecture",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
}
module.exports = td;