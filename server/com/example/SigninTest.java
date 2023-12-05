package com.example; // Fixing the package declaration

import io.gatling.core.Predef._;
import io.gatling.http.Predef._;

class SigninTest{

    val httpConf = http
        .baseUrl("https://www.example.com") // Replace with your target base URL

    val scn = scenario("My Scenario")
        .exec(http("request_1")
            .get("/path/to/your/endpoint")) // Replace with your API endpoint

    setUp(
        scn.inject(atOnceUsers(10)) // Adjust the number of users and injection pattern
    ).protocols(httpConf)
}

