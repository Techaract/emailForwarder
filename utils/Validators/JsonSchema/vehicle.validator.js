Schema = {};

Schema.postVehicle = (id) => {
    return {
        "id" : id,
        "type": "object",
        "properties": {
          "user_id": {
            "type": "integer"
          },
          "chasis_no": {
            "type": "string"
          },
          "engine_no": {
            "type": "string"
          },
          "registration_number": {
            "type": "string"
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "user_id",
          "chasis_no",
          "engine_no",
          "registration_number",
          "type"
        ]
      }
}

module.exports = Schema;