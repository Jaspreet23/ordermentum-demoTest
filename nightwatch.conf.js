const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'step_definitions', '--format', 'json:report/cucumber-report.json', 'features']
});

module.exports = {
  output_folder: 'report',
  custom_assertions_path: '',
  page_objects_path: 'page_objects',
  globals_path: "globalsModule.js",
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  //This is to enable run in parrallel 
  test_workers: {
    enabled: false,
    workers: 'auto',
  },
  test_settings: {
    default: {
    },
    chrome: {
      env: ['prod'],
      launch_url :"${NODE_ENV}",
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },
    headlessChrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless']
        },
        selenium: {
          cli_args: {
            'webdriver.chrome.driver': chromedriver.path
          }
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        marionette: true,
        acceptSslCerts: true,
      },
      selenium: {
        cli_args: {
          "webdriver.firefox.profile": "nightwatch"
        }
      }
    }
  }
};