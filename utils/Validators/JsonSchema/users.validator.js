Schema = {};

Schema.postUser = (id) => {
    return {
        "id": id,
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "ph_number": {
                "type": "string"
            },
            "gender": {
                "type": "string"
            },
            "first_name": {
                "type": "string"
            },
            "last_name": {
                "type": "string"
            }
        },
        "required": [
            "email",
            "password",
            "ph_number",
            "gender",
            "first_name",
            "last_name"
        ]
    }
}

Schema.postLogin = (id) => {
    return {
        "id": id,
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            }
        },
        "required": [
            "email",
            "password"
        ]
    }
}

module.exports = Schema;