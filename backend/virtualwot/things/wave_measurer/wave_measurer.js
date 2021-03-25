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
                "degree": {
                    "type": "number",
                    "minimum": 0,
                    "maximum": 9
                },
                "description": {
                    "type": "string",
                },
                "height":{
                    "type": "number",
                    // How to define it
                }
            },
            "required": [
                "degree",
            ],
            "forms": [{
                "op": [
                    "readproperty",
                ],
                "href": "http://localhost:9000/virtual/wind_sensor/wind_sensor/speed",
                "contentType": "application/json"
            }],

        },
    },
    "links": []
}
module.exports = td;