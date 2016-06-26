/**
 * Created by udit on 20/06/16.
 */

Schemas = {};

Schemas.coordinates = new SimpleSchema(
    {
        lat: {
            type: Number
        },
        long: {
            type: Number
        },
        postalAddress: {
            type: String
        }
    }
);