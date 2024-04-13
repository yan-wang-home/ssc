package com.mortgagehub.repository;

import com.mortgagehub.domain.ContactForm;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB reactive repository for the ContactForm entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ContactFormRepository extends ReactiveMongoRepository<ContactForm, String> {}
