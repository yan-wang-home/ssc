package com.mortgagehub.web.rest;

import com.mortgagehub.domain.ContactForm;
import com.mortgagehub.repository.ContactFormRepository;
import com.mortgagehub.service.ContactFormService;
import com.mortgagehub.service.MailService;
import com.mortgagehub.web.rest.errors.BadRequestAlertException;
import com.mortgagehub.web.rest.errors.ElasticsearchExceptionMapper;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;

/**
 * REST controller for managing {@link com.mortgagehub.domain.ContactForm}.
 */
@RestController
@RequestMapping("/api/contact-forms")
public class ContactFormResource {

    private final Logger log = LoggerFactory.getLogger(ContactFormResource.class);

    private static final String ENTITY_NAME = "contactForm";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ContactFormService contactFormService;

    private final ContactFormRepository contactFormRepository;

    private final MailService mailService;

    public ContactFormResource(
        ContactFormService contactFormService,
        ContactFormRepository contactFormRepository,
        MailService mailService
    ) {
        this.contactFormService = contactFormService;
        this.contactFormRepository = contactFormRepository;
        this.mailService = mailService;
    }

    /**
     * {@code POST  /contact-forms} : Create a new contactForm.
     *
     * @param contactForm the contactForm to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new contactForm, or with status {@code 400 (Bad Request)} if the contactForm has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public Mono<ResponseEntity<ContactForm>> createContactForm(@Valid @RequestBody ContactForm contactForm) throws URISyntaxException {
        log.debug("REST request to save ContactForm : {}", contactForm);
        if (contactForm.getId() != null) {
            throw new BadRequestAlertException("A new contactForm cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return contactFormService
            .save(contactForm)
            .doOnSuccess(mailService::sendContactFormEmail)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/contact-forms/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /contact-forms/:id} : Updates an existing contactForm.
     *
     * @param id the id of the contactForm to save.
     * @param contactForm the contactForm to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated contactForm,
     * or with status {@code 400 (Bad Request)} if the contactForm is not valid,
     * or with status {@code 500 (Internal Server Error)} if the contactForm couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public Mono<ResponseEntity<ContactForm>> updateContactForm(
        @PathVariable(value = "id", required = false) final String id,
        @Valid @RequestBody ContactForm contactForm
    ) throws URISyntaxException {
        log.debug("REST request to update ContactForm : {}, {}", id, contactForm);
        if (contactForm.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, contactForm.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return contactFormRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return contactFormService
                    .update(contactForm)
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(result ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, result.getId()))
                            .body(result)
                    );
            });
    }

    /**
     * {@code PATCH  /contact-forms/:id} : Partial updates given fields of an existing contactForm, field will ignore if it is null
     *
     * @param id the id of the contactForm to save.
     * @param contactForm the contactForm to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated contactForm,
     * or with status {@code 400 (Bad Request)} if the contactForm is not valid,
     * or with status {@code 404 (Not Found)} if the contactForm is not found,
     * or with status {@code 500 (Internal Server Error)} if the contactForm couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<ContactForm>> partialUpdateContactForm(
        @PathVariable(value = "id", required = false) final String id,
        @NotNull @RequestBody ContactForm contactForm
    ) throws URISyntaxException {
        log.debug("REST request to partial update ContactForm partially : {}, {}", id, contactForm);
        if (contactForm.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, contactForm.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return contactFormRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<ContactForm> result = contactFormService.partialUpdate(contactForm);

                return result
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(res ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, res.getId()))
                            .body(res)
                    );
            });
    }

    /**
     * {@code GET  /contact-forms} : get all the contactForms.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of contactForms in body.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<List<ContactForm>> getAllContactForms() {
        log.debug("REST request to get all ContactForms");
        return contactFormService.findAll().collectList();
    }

    /**
     * {@code GET  /contact-forms} : get all the contactForms as a stream.
     * @return the {@link Flux} of contactForms.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public Flux<ContactForm> getAllContactFormsAsStream() {
        log.debug("REST request to get all ContactForms as a stream");
        return contactFormService.findAll();
    }

    /**
     * {@code GET  /contact-forms/:id} : get the "id" contactForm.
     *
     * @param id the id of the contactForm to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the contactForm, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public Mono<ResponseEntity<ContactForm>> getContactForm(@PathVariable("id") String id) {
        log.debug("REST request to get ContactForm : {}", id);
        Mono<ContactForm> contactForm = contactFormService.findOne(id);
        return ResponseUtil.wrapOrNotFound(contactForm);
    }

    /**
     * {@code DELETE  /contact-forms/:id} : delete the "id" contactForm.
     *
     * @param id the id of the contactForm to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> deleteContactForm(@PathVariable("id") String id) {
        log.debug("REST request to delete ContactForm : {}", id);
        return contactFormService
            .delete(id)
            .then(
                Mono.just(
                    ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build()
                )
            );
    }

    /**
     * {@code SEARCH  /contact-forms/_search?query=:query} : search for the contactForm corresponding
     * to the query.
     *
     * @param query the query of the contactForm search.
     * @return the result of the search.
     */
    @GetMapping("/_search")
    public Mono<List<ContactForm>> searchContactForms(@RequestParam("query") String query) {
        log.debug("REST request to search ContactForms for query {}", query);
        try {
            return contactFormService.search(query).collectList();
        } catch (RuntimeException e) {
            throw ElasticsearchExceptionMapper.mapException(e);
        }
    }
}
