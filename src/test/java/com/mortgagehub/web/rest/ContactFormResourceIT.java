package com.mortgagehub.web.rest;

import static com.mortgagehub.domain.ContactFormAsserts.*;
import static com.mortgagehub.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mortgagehub.IntegrationTest;
import com.mortgagehub.domain.ContactForm;
import com.mortgagehub.repository.ContactFormRepository;
import com.mortgagehub.repository.search.ContactFormSearchRepository;
import java.time.Duration;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import org.assertj.core.util.IterableUtil;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.data.util.Streamable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;

/**
 * Integration tests for the {@link ContactFormResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class ContactFormResourceIT {

    private static final String DEFAULT_EMAIL = "AAAAAAAAAA";
    private static final String UPDATED_EMAIL = "BBBBBBBBBB";

    private static final String DEFAULT_SUBJECT = "AAAAAAAAAA";
    private static final String UPDATED_SUBJECT = "BBBBBBBBBB";

    private static final String DEFAULT_MESSAGE = "AAAAAAAAAA";
    private static final String UPDATED_MESSAGE = "BBBBBBBBBB";

    private static final Boolean DEFAULT_SUBSCRIBE = false;
    private static final Boolean UPDATED_SUBSCRIBE = true;

    private static final String ENTITY_API_URL = "/api/contact-forms";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";
    private static final String ENTITY_SEARCH_API_URL = "/api/contact-forms/_search";

    @Autowired
    private ObjectMapper om;

    @Autowired
    private ContactFormRepository contactFormRepository;

    @Autowired
    private ContactFormSearchRepository contactFormSearchRepository;

    @Autowired
    private WebTestClient webTestClient;

    private ContactForm contactForm;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ContactForm createEntity() {
        ContactForm contactForm = new ContactForm()
            .email(DEFAULT_EMAIL)
            .subject(DEFAULT_SUBJECT)
            .message(DEFAULT_MESSAGE)
            .subscribe(DEFAULT_SUBSCRIBE);
        return contactForm;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ContactForm createUpdatedEntity() {
        ContactForm contactForm = new ContactForm()
            .email(UPDATED_EMAIL)
            .subject(UPDATED_SUBJECT)
            .message(UPDATED_MESSAGE)
            .subscribe(UPDATED_SUBSCRIBE);
        return contactForm;
    }

    @AfterEach
    public void cleanupElasticSearchRepository() {
        contactFormSearchRepository.deleteAll().block();
        assertThat(contactFormSearchRepository.count().block()).isEqualTo(0);
    }

    @BeforeEach
    public void initTest() {
        contactFormRepository.deleteAll().block();
        contactForm = createEntity();
    }

    @Test
    void createContactForm() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        // Create the ContactForm
        var returnedContactForm = webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isCreated()
            .expectBody(ContactForm.class)
            .returnResult()
            .getResponseBody();

        // Validate the ContactForm in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertContactFormUpdatableFieldsEquals(returnedContactForm, getPersistedContactForm(returnedContactForm));

        await()
            .atMost(5, TimeUnit.SECONDS)
            .untilAsserted(() -> {
                int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
                assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore + 1);
            });
    }

    @Test
    void createContactFormWithExistingId() throws Exception {
        // Create the ContactForm with an existing ID
        contactForm.setId("existing_id");

        long databaseSizeBeforeCreate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void checkEmailIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        // set the field null
        contactForm.setEmail(null);

        // Create the ContactForm, which fails.

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        assertSameRepositoryCount(databaseSizeBeforeTest);

        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void checkSubjectIsRequired() throws Exception {
        long databaseSizeBeforeTest = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        // set the field null
        contactForm.setSubject(null);

        // Create the ContactForm, which fails.

        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        assertSameRepositoryCount(databaseSizeBeforeTest);

        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void getAllContactFormsAsStream() {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        List<ContactForm> contactFormList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(ContactForm.class)
            .getResponseBody()
            .filter(contactForm::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(contactFormList).isNotNull();
        assertThat(contactFormList).hasSize(1);
        ContactForm testContactForm = contactFormList.get(0);

        assertContactFormAllPropertiesEquals(contactForm, testContactForm);
    }

    @Test
    void getAllContactForms() {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        // Get all the contactFormList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(contactForm.getId()))
            .jsonPath("$.[*].email")
            .value(hasItem(DEFAULT_EMAIL))
            .jsonPath("$.[*].subject")
            .value(hasItem(DEFAULT_SUBJECT))
            .jsonPath("$.[*].message")
            .value(hasItem(DEFAULT_MESSAGE))
            .jsonPath("$.[*].subscribe")
            .value(hasItem(DEFAULT_SUBSCRIBE.booleanValue()));
    }

    @Test
    void getContactForm() {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        // Get the contactForm
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, contactForm.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(contactForm.getId()))
            .jsonPath("$.email")
            .value(is(DEFAULT_EMAIL))
            .jsonPath("$.subject")
            .value(is(DEFAULT_SUBJECT))
            .jsonPath("$.message")
            .value(is(DEFAULT_MESSAGE))
            .jsonPath("$.subscribe")
            .value(is(DEFAULT_SUBSCRIBE.booleanValue()));
    }

    @Test
    void getNonExistingContactForm() {
        // Get the contactForm
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_PROBLEM_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putExistingContactForm() throws Exception {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();
        contactFormSearchRepository.save(contactForm).block();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());

        // Update the contactForm
        ContactForm updatedContactForm = contactFormRepository.findById(contactForm.getId()).block();
        updatedContactForm.email(UPDATED_EMAIL).subject(UPDATED_SUBJECT).message(UPDATED_MESSAGE).subscribe(UPDATED_SUBSCRIBE);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedContactForm.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(updatedContactForm))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedContactFormToMatchAllProperties(updatedContactForm);

        await()
            .atMost(5, TimeUnit.SECONDS)
            .untilAsserted(() -> {
                int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
                assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
                List<ContactForm> contactFormSearchList = Streamable
                    .of(contactFormSearchRepository.findAll().collectList().block())
                    .toList();
                ContactForm testContactFormSearch = contactFormSearchList.get(searchDatabaseSizeAfter - 1);

                assertContactFormAllPropertiesEquals(testContactFormSearch, updatedContactForm);
            });
    }

    @Test
    void putNonExistingContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, contactForm.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void putWithIdMismatchContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, UUID.randomUUID().toString())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void putWithMissingIdPathParamContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void partialUpdateContactFormWithPatch() throws Exception {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the contactForm using partial update
        ContactForm partialUpdatedContactForm = new ContactForm();
        partialUpdatedContactForm.setId(contactForm.getId());

        partialUpdatedContactForm.email(UPDATED_EMAIL).message(UPDATED_MESSAGE).subscribe(UPDATED_SUBSCRIBE);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedContactForm.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedContactForm))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the ContactForm in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertContactFormUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedContactForm, contactForm),
            getPersistedContactForm(contactForm)
        );
    }

    @Test
    void fullUpdateContactFormWithPatch() throws Exception {
        // Initialize the database
        contactFormRepository.save(contactForm).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the contactForm using partial update
        ContactForm partialUpdatedContactForm = new ContactForm();
        partialUpdatedContactForm.setId(contactForm.getId());

        partialUpdatedContactForm.email(UPDATED_EMAIL).subject(UPDATED_SUBJECT).message(UPDATED_MESSAGE).subscribe(UPDATED_SUBSCRIBE);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedContactForm.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedContactForm))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the ContactForm in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertContactFormUpdatableFieldsEquals(partialUpdatedContactForm, getPersistedContactForm(partialUpdatedContactForm));
    }

    @Test
    void patchNonExistingContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, contactForm.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void patchWithIdMismatchContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, UUID.randomUUID().toString())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void patchWithMissingIdPathParamContactForm() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        contactForm.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(contactForm))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the ContactForm in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void deleteContactForm() {
        // Initialize the database
        contactFormRepository.save(contactForm).block();
        contactFormRepository.save(contactForm).block();
        contactFormSearchRepository.save(contactForm).block();

        long databaseSizeBeforeDelete = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeBefore).isEqualTo(databaseSizeBeforeDelete);

        // Delete the contactForm
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, contactForm.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(contactFormSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore - 1);
    }

    @Test
    void searchContactForm() {
        // Initialize the database
        contactForm = contactFormRepository.save(contactForm).block();
        contactFormSearchRepository.save(contactForm).block();

        // Search the contactForm
        webTestClient
            .get()
            .uri(ENTITY_SEARCH_API_URL + "?query=id:" + contactForm.getId())
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(contactForm.getId()))
            .jsonPath("$.[*].email")
            .value(hasItem(DEFAULT_EMAIL))
            .jsonPath("$.[*].subject")
            .value(hasItem(DEFAULT_SUBJECT))
            .jsonPath("$.[*].message")
            .value(hasItem(DEFAULT_MESSAGE))
            .jsonPath("$.[*].subscribe")
            .value(hasItem(DEFAULT_SUBSCRIBE.booleanValue()));
    }

    protected long getRepositoryCount() {
        return contactFormRepository.count().block();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected ContactForm getPersistedContactForm(ContactForm contactForm) {
        return contactFormRepository.findById(contactForm.getId()).block();
    }

    protected void assertPersistedContactFormToMatchAllProperties(ContactForm expectedContactForm) {
        assertContactFormAllPropertiesEquals(expectedContactForm, getPersistedContactForm(expectedContactForm));
    }

    protected void assertPersistedContactFormToMatchUpdatableProperties(ContactForm expectedContactForm) {
        assertContactFormAllUpdatablePropertiesEquals(expectedContactForm, getPersistedContactForm(expectedContactForm));
    }
}
