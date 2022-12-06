Schema = {};

Schema.postVehicleLogs = (id) => {
    return {
        "id" : id,
        "type": "object",
        "properties": {
            "rf_id": {
                "type": "string"
            },
            "in_out": {
                "type": "string"
            },
            "vehicle_uuid": {
                "type": "string"
            }
        },
        "required": [
            "rf_id",
            "in_out",
            "vehicle_uuid"
        ]
    }
}

module.exports = Schema;