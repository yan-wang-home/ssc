package com.mortgagehub.domain;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A ContactForm.
 */
@Document(collection = "contact_form")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "contactform")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class ContactForm implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull(message = "must not be null")
    @Field("email")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String email;

    @NotNull(message = "must not be null")
    @Field("subject")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String subject;

    @Field("message")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String message;

    @Field("subscribe")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Boolean)
    private Boolean subscribe;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public ContactForm id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public ContactForm email(String email) {
        this.setEmail(email);
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return this.subject;
    }

    public ContactForm subject(String subject) {
        this.setSubject(subject);
        return this;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return this.message;
    }

    public ContactForm message(String message) {
        this.setMessage(message);
        return this;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getSubscribe() {
        return this.subscribe;
    }

    public ContactForm subscribe(Boolean subscribe) {
        this.setSubscribe(subscribe);
        return this;
    }

    public void setSubscribe(Boolean subscribe) {
        this.subscribe = subscribe;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ContactForm)) {
            return false;
        }
        return getId() != null && getId().equals(((ContactForm) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ContactForm{" +
            "id=" + getId() +
            ", email='" + getEmail() + "'" +
            ", subject='" + getSubject() + "'" +
            ", message='" + getMessage() + "'" +
            ", subscribe='" + getSubscribe() + "'" +
            "}";
    }
}
