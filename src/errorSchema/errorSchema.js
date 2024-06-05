"use strict";

const validationErrorSchema = {
	type: "object",
	properties: {
		errors: {
			type: "array",
			items: {
				type: "object",
				properties: {
					property: { type: "string" },
					message: { type: "string" },
					code: { type: "string" },
				},
			},
		},
	},
};

const commonErrorSchema = {
	type: "object",
	properties: {
		errors: {
			type: "array",
			items: {
				type: "object",
				properties: {
					code: { type: "string" },
					message: { type: "string" },
				},
			},
		},
	},
};

const errorSchemas = {
	400: validationErrorSchema,
	401: commonErrorSchema,
	404: commonErrorSchema,
	405: commonErrorSchema,
	415: commonErrorSchema,
	429: commonErrorSchema,
	500: commonErrorSchema,
	502: commonErrorSchema,
};

export default errorSchemas;
