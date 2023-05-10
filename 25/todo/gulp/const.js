module.exports.path = {
  dest: "./dist",
  destJs: "./app.js",
  destVendorJs: "./vendor.js",
  srcHtml: "./src/index.html",
  destCss: "./app.css",
  jsSrc: [
    "./src/model/TodoApi.js",
    "./src/model/Collection.js",
    "./src/view/TodoFormView.js",
    "./src/view/TodoListView.js",
    "./src/Controller.js",
    "./src/index.js",
    "./src/",
  ],
  jsVendorSrc: ["./node_modules/jquery/dist/jquery.min.js"],
  cssSrc: "./src/**/*.css",
};
