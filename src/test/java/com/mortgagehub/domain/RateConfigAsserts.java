package com.mortgagehub.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class RateConfigAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRateConfigAllPropertiesEquals(RateConfig expected, RateConfig actual) {
        assertRateConfigAutoGeneratedPropertiesEquals(expected, actual);
        assertRateConfigAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRateConfigAllUpdatablePropertiesEquals(RateConfig expected, RateConfig actual) {
        assertRateConfigUpdatableFieldsEquals(expected, actual);
        assertRateConfigUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRateConfigAutoGeneratedPropertiesEquals(RateConfig expected, RateConfig actual) {
        assertThat(expected)
            .as("Verify RateConfig auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRateConfigUpdatableFieldsEquals(RateConfig expected, RateConfig actual) {
        assertThat(expected)
            .as("Verify RateConfig relevant properties")
            .satisfies(e ->
                assertThat(e.getOneYearFixedInsured()).as("check oneYearFixedInsured").isEqualTo(actual.getOneYearFixedInsured())
            )
            .satisfies(e ->
                assertThat(e.getTwoYearFixedInsured()).as("check twoYearFixedInsured").isEqualTo(actual.getTwoYearFixedInsured())
            )
            .satisfies(e ->
                assertThat(e.getThreeYearFixedInsured()).as("check threeYearFixedInsured").isEqualTo(actual.getThreeYearFixedInsured())
            )
            .satisfies(e ->
                assertThat(e.getFourYearFixedInsured()).as("check fourYearFixedInsured").isEqualTo(actual.getFourYearFixedInsured())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearFixedInsured()).as("check fiveYearFixedInsured").isEqualTo(actual.getFiveYearFixedInsured())
            )
            .satisfies(e ->
                assertThat(e.getOneYearFixedInsurable()).as("check oneYearFixedInsurable").isEqualTo(actual.getOneYearFixedInsurable())
            )
            .satisfies(e ->
                assertThat(e.getTwoYearFixedInsurable()).as("check twoYearFixedInsurable").isEqualTo(actual.getTwoYearFixedInsurable())
            )
            .satisfies(e ->
                assertThat(e.getThreeYearFixedInsurable())
                    .as("check threeYearFixedInsurable")
                    .isEqualTo(actual.getThreeYearFixedInsurable())
            )
            .satisfies(e ->
                assertThat(e.getFourYearFixedInsurable()).as("check fourYearFixedInsurable").isEqualTo(actual.getFourYearFixedInsurable())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearFixedInsurable()).as("check fiveYearFixedInsurable").isEqualTo(actual.getFiveYearFixedInsurable())
            )
            .satisfies(e ->
                assertThat(e.getOneYearFixedConventional())
                    .as("check oneYearFixedConventional")
                    .isEqualTo(actual.getOneYearFixedConventional())
            )
            .satisfies(e ->
                assertThat(e.getTwoYearFixedConventional())
                    .as("check twoYearFixedConventional")
                    .isEqualTo(actual.getTwoYearFixedConventional())
            )
            .satisfies(e ->
                assertThat(e.getThreeYearFixedConventional())
                    .as("check threeYearFixedConventional")
                    .isEqualTo(actual.getThreeYearFixedConventional())
            )
            .satisfies(e ->
                assertThat(e.getFourYearFixedConventional())
                    .as("check fourYearFixedConventional")
                    .isEqualTo(actual.getFourYearFixedConventional())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearFixedConventional())
                    .as("check fiveYearFixedConventional")
                    .isEqualTo(actual.getFiveYearFixedConventional())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearVariableInsured())
                    .as("check fiveYearVariableInsured")
                    .isEqualTo(actual.getFiveYearVariableInsured())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearVariableInsurable())
                    .as("check fiveYearVariableInsurable")
                    .isEqualTo(actual.getFiveYearVariableInsurable())
            )
            .satisfies(e ->
                assertThat(e.getFiveYearVariableConventional())
                    .as("check fiveYearVariableConventional")
                    .isEqualTo(actual.getFiveYearVariableConventional())
            );
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertRateConfigUpdatableRelationshipsEquals(RateConfig expected, RateConfig actual) {}
}
