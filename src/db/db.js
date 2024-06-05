import mongoose from "mongoose";

const connectMongo = (mongoURI) => {
	mongoose.connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	mongoose.connection.on("error", (err) => {
		console.log(err);
		process.exit();
	});
};

export default connectMongo;
