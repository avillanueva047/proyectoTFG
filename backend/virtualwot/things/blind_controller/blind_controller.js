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
        "opening": {
            "type": "object",
            "properties": {
                "percentage": {
                    "type": "integer",
                    "minimum": 0,
                    "maximum": 100
                }
            },
            "required": [
                "percentage",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/blind_controller/blind_controller/opening",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],

        },
    },
    "action" : {
        "open" : {
            "title" : "Open Blind",
            "description" : "Opens the blind by ten percent",
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
                "href": "http://localhost:9000/virtual/blind_controller/blind_controller/open",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "close" : {
            "title" : "Close Blind",
            "description" : "Closes the blind by ten percent",
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
                "href": "http://localhost:9000/virtual/blind_controller/blind_controller/close",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        }
    },
    "links": []
}
module.exports = td;