var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:blind_controller",
    "title": "blind_controller",
    "@type": "acg:blind_controller",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "open": {
            "type": "object",
            "properties": {
                "percentage": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/blind_controller/blind_controller/open",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;