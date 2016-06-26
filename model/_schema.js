/**
 * Created by udit on 20/06/16.
 */

Schemas = {};

Schemas.coordinates = new SimpleSchema(
    {
        lat: {
            type: Number,
            optional: true
        },
        long: {
            type: Number,
            optional: true
        },
        postalAddress: {
            type: String,
            optional: true
        }
    }
);