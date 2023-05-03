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
        "status": {
            "type": "object",
            "properties": {
                "activated": {
                    "type": "boolean",
                }
            },
            "required": [
                "activated",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/alarm_controller/alarm_controller/status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
    "actions":{
        "activate":{
            "title" : "Activate Alarm",
            "description" : "Activates the fire alarm",
            "output" : {
                "type" : "object",
                "properties": {
                    "activated": {
                        "type": "boolean"
                    }
                },
                "activated": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/alarm_controller/alarm_controller/activate",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "deactivate":{
            "title" : "Deactivate Alarm",
            "description" : "Deactivates the fire alarm",
            "output" : {
                "type" : "object",
                "properties": {
                    "activated": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "activated"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/alarm_controller/alarm_controller/deactivate",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        }
    },
    "links": [
        {
            "rel": "representedBy",
            "href": "/alarm_controller_ui.js",
            "type": "application/json"
        }
    ]
}
module.exports = td;