var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:wave_measurer",
    "title": "wave_measurer",
    "@type": "acg:wave_measurer",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "scale": {
            "type": "object",
            "properties": {
                "grade": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 9,
                    "description": "Used the Douglas Scale metric"
                },
                "description": {
                    "type": "string",
                }
            },
            "required": [
                "grade",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/wave_measurer/wave_measurer/grade",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;