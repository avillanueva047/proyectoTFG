var td = {
    "@context": "https://www.w3.org/2019/wot/td/v1",
    "id": "urn:dev:ops:capacity_cinema",
    "title": "capacity_cinema",
    "@type": "acg:capacity_sensor",
    "securityDefinitions": {
        "basic_sc": {
            "scheme": "basic"
        }
    },
    "security": [
        "basic_sc"
    ],
    "properties": {
        "capacity": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 300,
                }
            },
            "required": [
                "value",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/capacity_sensor/capacity_cinema/capacity",
                "htv:methodName": "GET",
                "contentType": "application/json"
            }],
        },
    },
    "action" : {
        "increase" : {
            "title" : "Increase Current Capacity",
            "description" : "Increases the current capacity by one",
            "input" : {
                "type" : "object",
                "properties": {
                    "increment": {
                        "type": "number",
                        "const": 1
                    }
                },
                "required": [
                    "increment"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/capacity_sensor/capacity_cinema/increase",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        },
        "decrease" : {
            "title" : "Decrease Current Capacity",
            "description" : "Decreases the current capacity by one",
            "input" : {
                "type" : "object",
                "properties": {
                    "decrement": {
                        "type": "number",
                        "const": -1
                    }
                },
                "required": [
                    "decrement"
                ],
            },
            "forms": [{
                "op": [
                    "writeproperty",
                ],
                "href": "http://localhost:9000/virtual/capacity_sensor/capacity_cinema/decrease",
                "htv:methodName": "POST",
                "contentType": "application/json"
            }]
        }
    },
    "links": []
}
module.exports = td;