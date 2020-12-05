module.exports = {
  settings: {
    parser: {
      enabled: true,
      multipart: true,
      formLimit: 10000,
      jsonLimit: 10000,
      textLimit: 10000,
      formidable: {
        maxFileSize: 20000000, // defaults to 200mb
      },
    },
  },
};
