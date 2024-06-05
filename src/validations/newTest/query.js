import errorSchemas from "../../errorSchema/errorSchema.js";

const getResponse = {
  summary: "get response from api",
  description: "<h3> Api description</h3>",
  body: {
    title: "Add or update  a Cart",
    type: "object",
    additionalProperties: false,
    required: [],
    properties: {},
  },
};

const getResponseSchema = {
  summary: "Api response",
  type: "object",
  properties: {
    status: { type: "number" },
    responseData: {
      type: "object",
      properties: {
        message: { type: "string" },
        response: {
          type: "object",
          properties: {
            foo: { type: "string" },
          },
        },
      },
    },
    transactionId: { type: "string" },
  },
};

export const reponseSchema = {
//   ...getResponse,
  response: {
    200: getResponseSchema,
    ...errorSchemas,
  },
};