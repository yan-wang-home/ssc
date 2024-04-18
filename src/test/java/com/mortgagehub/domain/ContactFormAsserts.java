package com.mortgagehub.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class ContactFormAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertContactFormAllPropertiesEquals(ContactForm expected, ContactForm actual) {
        assertContactFormAutoGeneratedPropertiesEquals(expected, actual);
        assertContactFormAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertContactFormAllUpdatablePropertiesEquals(ContactForm expected, ContactForm actual) {
        assertContactFormUpdatableFieldsEquals(expected, actual);
        assertContactFormUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertContactFormAutoGeneratedPropertiesEquals(ContactForm expected, ContactForm actual) {
        assertThat(expected)
            .as("Verify ContactForm auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertContactFormUpdatableFieldsEquals(ContactForm expected, ContactForm actual) {
        assertThat(expected)
            .as("Verify ContactForm relevant properties")
            .satisfies(e -> assertThat(e.getEmail()).as("check email").isEqualTo(actual.getEmail()))
            .satisfies(e -> assertThat(e.getSubject()).as("check subject").isEqualTo(actual.getSubject()))
            .satisfies(e -> assertThat(e.getMessage()).as("check message").isEqualTo(actual.getMessage()))
            .satisfies(e -> assertThat(e.getSubscribe()).as("check subscribe").isEqualTo(actual.getSubscribe()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertContactFormUpdatableRelationshipsEquals(ContactForm expected, ContactForm actual) {}
}