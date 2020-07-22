$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/login.feature");
formatter.feature({
  "line": 2,
  "name": "Test Facebook Smoke Scenarios",
  "description": "",
  "id": "test-facebook-smoke-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test Facebook with valid Creditionals",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I provide valid \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Application closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;1"
    },
    {
      "cells": [
        "demo1",
        "demo1"
      ],
      "line": 14,
      "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;2"
    },
    {
      "cells": [
        "demo",
        "demo"
      ],
      "line": 15,
      "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;3"
    },
    {
      "cells": [
        "value",
        "value"
      ],
      "line": 16,
      "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Test Facebook with valid Creditionals",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I provide valid \"demo1\" and \"demo1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Application closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeClass4.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 31057673000,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttp%3A//www.newtours.demoaut.com/\u0026c\u003dUTF-8\u0026d\u003dWe%20can%E2%80%99t%20connect%20to%20the%20server%20at%20www.newtours.demoaut.com.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-7VEO2OS\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200602222727, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 17176, moz:profile: C:\\Users\\Sai Deepika\\AppDat..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9d296aef-9ea2-4362-8ceb-83705347def9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat Stepdefinitions.SmokeClass4.Open_firefox_and_start_application(SmokeClass4.java:25)\r\n\tat ✽.Given Open firefox and start application(src/test/resources/Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo1",
      "offset": 17
    },
    {
      "val": "demo1",
      "offset": 29
    }
  ],
  "location": "SmokeClass4.I_provide_valid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.application_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Test Facebook with valid Creditionals",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I provide valid \"demo\" and \"demo\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Application closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeClass4.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 16363799300,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttp%3A//www.newtours.demoaut.com/\u0026c\u003dUTF-8\u0026d\u003dWe%20can%E2%80%99t%20connect%20to%20the%20server%20at%20www.newtours.demoaut.com.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-7VEO2OS\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200602222727, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 23104, moz:profile: C:\\Users\\Sai Deepika\\AppDat..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b20e8b48-3d51-4a76-8172-20140dacde5c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat Stepdefinitions.SmokeClass4.Open_firefox_and_start_application(SmokeClass4.java:25)\r\n\tat ✽.Given Open firefox and start application(src/test/resources/Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo",
      "offset": 17
    },
    {
      "val": "demo",
      "offset": 28
    }
  ],
  "location": "SmokeClass4.I_provide_valid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.application_closed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Test Facebook with valid Creditionals",
  "description": "",
  "id": "test-facebook-smoke-scenarios;test-facebook-with-valid-creditionals;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I provide valid \"value\" and \"value\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Application closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeClass4.Open_firefox_and_start_application()"
});
formatter.result({
  "duration": 18022307500,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:neterror?e\u003ddnsNotFound\u0026u\u003dhttp%3A//www.newtours.demoaut.com/\u0026c\u003dUTF-8\u0026d\u003dWe%20can%E2%80%99t%20connect%20to%20the%20server%20at%20www.newtours.demoaut.com.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-7VEO2OS\u0027, ip: \u0027172.20.10.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 77.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200602222727, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 21648, moz:profile: C:\\Users\\Sai Deepika\\AppDat..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6f3686f3-5500-46e3-9348-50eec083972f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:273)\r\n\tat Stepdefinitions.SmokeClass4.Open_firefox_and_start_application(SmokeClass4.java:25)\r\n\tat ✽.Given Open firefox and start application(src/test/resources/Feature/login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "value",
      "offset": 17
    },
    {
      "val": "value",
      "offset": 29
    }
  ],
  "location": "SmokeClass4.I_provide_valid_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.User_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeClass4.application_closed()"
});
formatter.result({
  "status": "skipped"
});
});