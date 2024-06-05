import Fastify from "fastify";
import conf from "config";
import generateId from "time-uuid";

const createRequestId = () => generateId();

const createServer = async (options) => {
  const { logSeverity } = options;

  const app = Fastify({
    ignoreTrailingSlash: true,
    bodyLimit: 5242880,
    logger: {
      genReqId: createRequestId,
      level: conf.get("logSeverity"),

      serializers: {
        res(reply) {
          return {
            statusCode: reply.statusCode,
            response: reply.payload,
          };
        },
        req(request) {
          return {
            method: request.method,
            url: request.url,
            request_body: request.body,
          };
        },
      },
    },
  });

  app.register(import("./src/routes/index.js"));

  //error handling
  app.setErrorHandler(async (error, req, reply) => {
    let statusCode = reply.statusCode;
    const { validation, validationContext } = error;
    req.log.error(error);
    response = {
      status: statusCode,
      responseData: {
        message: "An error occurred...",
        response: error,
      },
    };

    if (validation) {
      response.responseData.message = `A validation error occurred when validating the ${validationContext}...`;
      response.responseData.response = validation;
    }
    reply.code(statusCode).send(response);
  });

  app.addHook("preHandler", function (req, reply, next) {
    if (req.body) {
      req.log.info({ body: req.body }, "parsed body");
    }
    next();
  });

  // start the server
  app.listen({ port: conf.get("port"), host: "0.0.0.0" }, (err) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info("Server Started");
  });
};

export default createServer;
