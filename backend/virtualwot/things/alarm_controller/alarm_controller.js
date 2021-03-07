var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:alarm_controller",
    "title": "alarm_controller",
    "@type": "acg:alarm_controller",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "state": {
            "type": "object",
            "properties": {
                "state": {
                    "type": "boolean",
                    "activate": true,
                    "deactivate": false,
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/alarm_controller/alarm_controller/state",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;