var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:gel_dispenser",
    "title": "gel_dispenser",
    "@type": "acg:gel_dispenser",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "action": {
        "dispense": {
            "title" : "Gel Dispenser",
            "description" : "Dispense a Gel when sensor detects a hand near",
            "type": "object",
            "input" : {
                "type" : "object",
                "properties": {
                    "activate": {
                        "type": "const",
                        "value": true
                    }
                },
                "required": [
                    "activate"
                ],
            },
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/gel_dispenser/gel_dispenser/dispense",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }],

        },
    },
}
module.exports = td;