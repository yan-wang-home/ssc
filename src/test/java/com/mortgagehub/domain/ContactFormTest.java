package com.mortgagehub.domain;

import static com.mortgagehub.domain.ContactFormTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mortgagehub.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ContactFormTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ContactForm.class);
        ContactForm contactForm1 = getContactFormSample1();
        ContactForm contactForm2 = new ContactForm();
        assertThat(contactForm1).isNotEqualTo(contactForm2);

        contactForm2.setId(contactForm1.getId());
        assertThat(contactForm1).isEqualTo(contactForm2);

        contactForm2 = getContactFormSample2();
        assertThat(contactForm1).isNotEqualTo(contactForm2);
    }
}
