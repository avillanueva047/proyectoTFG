var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:door_controller",
    "title": "door_controller",
    "@type": "acg:door_controller",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "lock_status": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "boolean"
                }
            },
            "required": [
                "lock_status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/lock_status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        },
        "open_status": {
            "type": "object",
            "properties": {
                "status": {
                    "type": "boolean"
                }
            },
            "required": [
                "open_status",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/open_status",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        }
    },
    "action" : {
        "lock" : {
            "title" : "Locks the door",
            "description" : "Locks the door safety",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/lock",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "unlock" : {
            "title" : "Unlocks the door",
            "description" : "Unlocks the door safety",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/unlock",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "open" : {
            "title" : "Open Door",
            "description" : "Opens the door",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/open",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "close" : {
            "title" : "Close Door",
            "description" : "Closes the door",
            "output" : {
                "type" : "object",
                "properties": {
                    "status": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "status"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/door_controller/door_controller/close",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
    },
    "links": []
}
module.exports = td;