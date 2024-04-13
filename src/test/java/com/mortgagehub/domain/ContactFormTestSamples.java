package com.mortgagehub.domain;

import java.util.UUID;

public class ContactFormTestSamples {

    public static ContactForm getContactFormSample1() {
        return new ContactForm().id("id1").email("email1").subject("subject1").message("message1");
    }

    public static ContactForm getContactFormSample2() {
        return new ContactForm().id("id2").email("email2").subject("subject2").message("message2");
    }

    public static ContactForm getContactFormRandomSampleGenerator() {
        return new ContactForm()
            .id(UUID.randomUUID().toString())
            .email(UUID.randomUUID().toString())
            .subject(UUID.randomUUID().toString())
            .message(UUID.randomUUID().toString());
    }
}
