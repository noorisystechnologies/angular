import { ExtractDocumentTypeFromTypedRxJsonSchema, RxJsonSchema, toTypedRxJsonSchema } from "rxdb";

export const USER_SCHEMA = {
    title : 'User Schema',
    version : 1,
    primaryKey : 'id',
    type:'object',
    properties:{
        id:{ type:'string', primary:true},
        fname:{ type :'string'},
        lname:{ type :'string'},
        email:{ type :'string'},
        password:{ type :'string'},
        timestamp: { type: 'date-time' },
    },
    required: ['id', 'password', 'timestamp', 'email',]
}

const schemaTyped = toTypedRxJsonSchema(USER_SCHEMA);
export type RxUserType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

export const MESSAGE_SCHEMA: RxJsonSchema<RxUserType> = USER_SCHEMA