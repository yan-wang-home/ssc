package com.mortgagehub.service;

import com.mortgagehub.domain.ContactForm;
import com.mortgagehub.repository.ContactFormRepository;
import com.mortgagehub.repository.search.ContactFormSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link com.mortgagehub.domain.ContactForm}.
 */
@Service
public class ContactFormService {

    private final Logger log = LoggerFactory.getLogger(ContactFormService.class);

    private final ContactFormRepository contactFormRepository;

    private final ContactFormSearchRepository contactFormSearchRepository;

    public ContactFormService(ContactFormRepository contactFormRepository, ContactFormSearchRepository contactFormSearchRepository) {
        this.contactFormRepository = contactFormRepository;
        this.contactFormSearchRepository = contactFormSearchRepository;
    }

    /**
     * Save a contactForm.
     *
     * @param contactForm the entity to save.
     * @return the persisted entity.
     */
    public Mono<ContactForm> save(ContactForm contactForm) {
        log.debug("Request to save ContactForm : {}", contactForm);
        return contactFormRepository.save(contactForm).flatMap(contactFormSearchRepository::save);
    }

    /**
     * Update a contactForm.
     *
     * @param contactForm the entity to save.
     * @return the persisted entity.
     */
    public Mono<ContactForm> update(ContactForm contactForm) {
        log.debug("Request to update ContactForm : {}", contactForm);
        return contactFormRepository.save(contactForm).flatMap(contactFormSearchRepository::save);
    }

    /**
     * Partially update a contactForm.
     *
     * @param contactForm the entity to update partially.
     * @return the persisted entity.
     */
    public Mono<ContactForm> partialUpdate(ContactForm contactForm) {
        log.debug("Request to partially update ContactForm : {}", contactForm);

        return contactFormRepository
            .findById(contactForm.getId())
            .map(existingContactForm -> {
                if (contactForm.getEmail() != null) {
                    existingContactForm.setEmail(contactForm.getEmail());
                }
                if (contactForm.getSubject() != null) {
                    existingContactForm.setSubject(contactForm.getSubject());
                }
                if (contactForm.getMessage() != null) {
                    existingContactForm.setMessage(contactForm.getMessage());
                }
                if (contactForm.getSubscribe() != null) {
                    existingContactForm.setSubscribe(contactForm.getSubscribe());
                }

                return existingContactForm;
            })
            .flatMap(contactFormRepository::save)
            .flatMap(savedContactForm -> {
                contactFormSearchRepository.save(savedContactForm);
                return Mono.just(savedContactForm);
            });
    }

    /**
     * Get all the contactForms.
     *
     * @return the list of entities.
     */
    public Flux<ContactForm> findAll() {
        log.debug("Request to get all ContactForms");
        return contactFormRepository.findAll();
    }

    /**
     * Returns the number of contactForms available.
     * @return the number of entities in the database.
     *
     */
    public Mono<Long> countAll() {
        return contactFormRepository.count();
    }

    /**
     * Returns the number of contactForms available in search repository.
     *
     */
    public Mono<Long> searchCount() {
        return contactFormSearchRepository.count();
    }

    /**
     * Get one contactForm by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Mono<ContactForm> findOne(String id) {
        log.debug("Request to get ContactForm : {}", id);
        return contactFormRepository.findById(id);
    }

    /**
     * Delete the contactForm by id.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    public Mono<Void> delete(String id) {
        log.debug("Request to delete ContactForm : {}", id);
        return contactFormRepository.deleteById(id).then(contactFormSearchRepository.deleteById(id));
    }

    /**
     * Search for the contactForm corresponding to the query.
     *
     * @param query the query of the search.
     * @return the list of entities.
     */
    public Flux<ContactForm> search(String query) {
        log.debug("Request to search ContactForms for query {}", query);
        try {
            return contactFormSearchRepository.search(query);
        } catch (RuntimeException e) {
            throw e;
        }
    }
}
