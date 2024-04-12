package com.mortgagehub.domain;

import java.util.UUID;

public class RateConfigTestSamples {

    public static RateConfig getRateConfigSample1() {
        return new RateConfig()
            .id("id1")
            .oneYearFixedInsured("oneYearFixedInsured1")
            .twoYearFixedInsured("twoYearFixedInsured1")
            .threeYearFixedInsured("threeYearFixedInsured1")
            .fourYearFixedInsured("fourYearFixedInsured1")
            .fiveYearFixedInsured("fiveYearFixedInsured1")
            .oneYearFixedInsurable("oneYearFixedInsurable1")
            .twoYearFixedInsurable("twoYearFixedInsurable1")
            .threeYearFixedInsurable("threeYearFixedInsurable1")
            .fourYearFixedInsurable("fourYearFixedInsurable1")
            .fiveYearFixedInsurable("fiveYearFixedInsurable1")
            .oneYearFixedConventional("oneYearFixedConventional1")
            .twoYearFixedConventional("twoYearFixedConventional1")
            .threeYearFixedConventional("threeYearFixedConventional1")
            .fourYearFixedConventional("fourYearFixedConventional1")
            .fiveYearFixedConventional("fiveYearFixedConventional1")
            .fiveYearVariableInsured("fiveYearVariableInsured1")
            .fiveYearVariableInsurable("fiveYearVariableInsurable1")
            .fiveYearVariableConventional("fiveYearVariableConventional1");
    }

    public static RateConfig getRateConfigSample2() {
        return new RateConfig()
            .id("id2")
            .oneYearFixedInsured("oneYearFixedInsured2")
            .twoYearFixedInsured("twoYearFixedInsured2")
            .threeYearFixedInsured("threeYearFixedInsured2")
            .fourYearFixedInsured("fourYearFixedInsured2")
            .fiveYearFixedInsured("fiveYearFixedInsured2")
            .oneYearFixedInsurable("oneYearFixedInsurable2")
            .twoYearFixedInsurable("twoYearFixedInsurable2")
            .threeYearFixedInsurable("threeYearFixedInsurable2")
            .fourYearFixedInsurable("fourYearFixedInsurable2")
            .fiveYearFixedInsurable("fiveYearFixedInsurable2")
            .oneYearFixedConventional("oneYearFixedConventional2")
            .twoYearFixedConventional("twoYearFixedConventional2")
            .threeYearFixedConventional("threeYearFixedConventional2")
            .fourYearFixedConventional("fourYearFixedConventional2")
            .fiveYearFixedConventional("fiveYearFixedConventional2")
            .fiveYearVariableInsured("fiveYearVariableInsured2")
            .fiveYearVariableInsurable("fiveYearVariableInsurable2")
            .fiveYearVariableConventional("fiveYearVariableConventional2");
    }

    public static RateConfig getRateConfigRandomSampleGenerator() {
        return new RateConfig()
            .id(UUID.randomUUID().toString())
            .oneYearFixedInsured(UUID.randomUUID().toString())
            .twoYearFixedInsured(UUID.randomUUID().toString())
            .threeYearFixedInsured(UUID.randomUUID().toString())
            .fourYearFixedInsured(UUID.randomUUID().toString())
            .fiveYearFixedInsured(UUID.randomUUID().toString())
            .oneYearFixedInsurable(UUID.randomUUID().toString())
            .twoYearFixedInsurable(UUID.randomUUID().toString())
            .threeYearFixedInsurable(UUID.randomUUID().toString())
            .fourYearFixedInsurable(UUID.randomUUID().toString())
            .fiveYearFixedInsurable(UUID.randomUUID().toString())
            .oneYearFixedConventional(UUID.randomUUID().toString())
            .twoYearFixedConventional(UUID.randomUUID().toString())
            .threeYearFixedConventional(UUID.randomUUID().toString())
            .fourYearFixedConventional(UUID.randomUUID().toString())
            .fiveYearFixedConventional(UUID.randomUUID().toString())
            .fiveYearVariableInsured(UUID.randomUUID().toString())
            .fiveYearVariableInsurable(UUID.randomUUID().toString())
            .fiveYearVariableConventional(UUID.randomUUID().toString());
    }
}
