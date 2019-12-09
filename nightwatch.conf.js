module.exports = {
  src_folders: ["tests"],
  page_objects_path: "page-objects",
  globals_path: "test-data/data.js",
  output_folder: "tests_output",
  live_output: false,

  webdriver: {
    start_process: true,
    // server_path: "node_modules/.bin/chromedriver",
    "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    port: 9515
  },
  // test_workers: {
  //   enabled: true,
  //   workers: 'auto'
  // },

  test_settings: {

    default: {
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: "tests_reports/screenshots"
      },

      desiredCapabilities: {
        browserName: "chrome",
        // chromeOptions: {
        //    "args": ["--headless"],
        // }
      }
    }
  }
};