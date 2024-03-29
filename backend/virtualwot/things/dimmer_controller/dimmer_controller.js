var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:dimmer_controller",
    "title": "dimmer_controller",
    "@type": "acg:dimmer_controller",
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
                "status": {
                    "type": "boolean"
                },
            },
            "required": [
                "status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
        "brightness":{
            "type": "object",
            "properties": {
                "percentage": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 100
                },
            },
            "required": [
                "intensity",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/brightness",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        }
    },
    "action" : {
        "switch" : {
            "title" : "Dimmer Switch",
            "description" : "Turns On / Off the Dimmer",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "output"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/switch",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "increase" : {
            "title" : "Increase Brightness",
            "description" : "Increases the brightness",
            "input" : {
                "type" : "object",
                "properties": {
                    "increase": {
                        "type": "const",
                        "value": 5
                    }
                },
                "required": [
                    "increase"
                ],
            },
            "output" : {
                "type" : "object",
                "properties": {
                    "percentage": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 100
                    }
                },
                "required": [
                    "percentage"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/increase",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "decrease" : {
            "title" : "Decrease Brightness",
            "description" : "Decreases the brightness",
            "input" : {
                "type" : "object",
                "properties": {
                    "decrease": {
                        "type": "const",
                        "value": -5
                    }
                },
                "required": [
                    "decrease"
                ],
            },
            "output" : {
                "type" : "object",
                "properties": {
                    "percentage": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 100
                    }
                },
                "required": [
                    "percentage"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/dimmer_controller/dimmer_controller/decrease",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        }
    },
    "links": []
}
module.exports = td;