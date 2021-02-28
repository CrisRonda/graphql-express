const frontEndURL = process.env.NODE_ENV
  ? process.env.URL_FRONT
  : "http://localhost:4200";

const options = {
  port: process.env.PORT || 4000,
  cors: {
    allowedHeaders: "*",
    origin: [frontEndURL],
    methods: ["HEAD", "GET", "POST", "OPTIONS"],
    exposedHeaders: "*",
  },
};

export default options;
