package com.mortgagehub.web.rest;

import static com.mortgagehub.domain.RateConfigAsserts.*;
import static com.mortgagehub.web.rest.TestUtil.createUpdateProxyForBean;
import static org.assertj.core.api.Assertions.assertThat;
import static org.awaitility.Awaitility.await;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mortgagehub.IntegrationTest;
import com.mortgagehub.domain.RateConfig;
import com.mortgagehub.repository.RateConfigRepository;
import com.mortgagehub.repository.search.RateConfigSearchRepository;
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
 * Integration tests for the {@link RateConfigResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class RateConfigResourceIT {

    private static final String DEFAULT_ONE_YEAR_FIXED_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_ONE_YEAR_FIXED_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_TWO_YEAR_FIXED_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_TWO_YEAR_FIXED_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_THREE_YEAR_FIXED_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_THREE_YEAR_FIXED_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_FOUR_YEAR_FIXED_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_FOUR_YEAR_FIXED_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_FIXED_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_FIXED_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_ONE_YEAR_FIXED_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_ONE_YEAR_FIXED_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_TWO_YEAR_FIXED_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_TWO_YEAR_FIXED_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_THREE_YEAR_FIXED_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_THREE_YEAR_FIXED_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_FOUR_YEAR_FIXED_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_FOUR_YEAR_FIXED_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_FIXED_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_FIXED_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_ONE_YEAR_FIXED_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_ONE_YEAR_FIXED_CONVENTIONAL = "BBBBBBBBBB";

    private static final String DEFAULT_TWO_YEAR_FIXED_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_TWO_YEAR_FIXED_CONVENTIONAL = "BBBBBBBBBB";

    private static final String DEFAULT_THREE_YEAR_FIXED_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_THREE_YEAR_FIXED_CONVENTIONAL = "BBBBBBBBBB";

    private static final String DEFAULT_FOUR_YEAR_FIXED_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_FOUR_YEAR_FIXED_CONVENTIONAL = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_FIXED_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_FIXED_CONVENTIONAL = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_VARIABLE_INSURED = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_VARIABLE_INSURED = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_VARIABLE_INSURABLE = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_VARIABLE_INSURABLE = "BBBBBBBBBB";

    private static final String DEFAULT_FIVE_YEAR_VARIABLE_CONVENTIONAL = "AAAAAAAAAA";
    private static final String UPDATED_FIVE_YEAR_VARIABLE_CONVENTIONAL = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/rate-configs";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";
    private static final String ENTITY_SEARCH_API_URL = "/api/rate-configs/_search";

    @Autowired
    private ObjectMapper om;

    @Autowired
    private RateConfigRepository rateConfigRepository;

    @Autowired
    private RateConfigSearchRepository rateConfigSearchRepository;

    @Autowired
    private WebTestClient webTestClient;

    private RateConfig rateConfig;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static RateConfig createEntity() {
        RateConfig rateConfig = new RateConfig()
            .oneYearFixedInsured(DEFAULT_ONE_YEAR_FIXED_INSURED)
            .twoYearFixedInsured(DEFAULT_TWO_YEAR_FIXED_INSURED)
            .threeYearFixedInsured(DEFAULT_THREE_YEAR_FIXED_INSURED)
            .fourYearFixedInsured(DEFAULT_FOUR_YEAR_FIXED_INSURED)
            .fiveYearFixedInsured(DEFAULT_FIVE_YEAR_FIXED_INSURED)
            .oneYearFixedInsurable(DEFAULT_ONE_YEAR_FIXED_INSURABLE)
            .twoYearFixedInsurable(DEFAULT_TWO_YEAR_FIXED_INSURABLE)
            .threeYearFixedInsurable(DEFAULT_THREE_YEAR_FIXED_INSURABLE)
            .fourYearFixedInsurable(DEFAULT_FOUR_YEAR_FIXED_INSURABLE)
            .fiveYearFixedInsurable(DEFAULT_FIVE_YEAR_FIXED_INSURABLE)
            .oneYearFixedConventional(DEFAULT_ONE_YEAR_FIXED_CONVENTIONAL)
            .twoYearFixedConventional(DEFAULT_TWO_YEAR_FIXED_CONVENTIONAL)
            .threeYearFixedConventional(DEFAULT_THREE_YEAR_FIXED_CONVENTIONAL)
            .fourYearFixedConventional(DEFAULT_FOUR_YEAR_FIXED_CONVENTIONAL)
            .fiveYearFixedConventional(DEFAULT_FIVE_YEAR_FIXED_CONVENTIONAL)
            .fiveYearVariableInsured(DEFAULT_FIVE_YEAR_VARIABLE_INSURED)
            .fiveYearVariableInsurable(DEFAULT_FIVE_YEAR_VARIABLE_INSURABLE)
            .fiveYearVariableConventional(DEFAULT_FIVE_YEAR_VARIABLE_CONVENTIONAL);
        return rateConfig;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static RateConfig createUpdatedEntity() {
        RateConfig rateConfig = new RateConfig()
            .oneYearFixedInsured(UPDATED_ONE_YEAR_FIXED_INSURED)
            .twoYearFixedInsured(UPDATED_TWO_YEAR_FIXED_INSURED)
            .threeYearFixedInsured(UPDATED_THREE_YEAR_FIXED_INSURED)
            .fourYearFixedInsured(UPDATED_FOUR_YEAR_FIXED_INSURED)
            .fiveYearFixedInsured(UPDATED_FIVE_YEAR_FIXED_INSURED)
            .oneYearFixedInsurable(UPDATED_ONE_YEAR_FIXED_INSURABLE)
            .twoYearFixedInsurable(UPDATED_TWO_YEAR_FIXED_INSURABLE)
            .threeYearFixedInsurable(UPDATED_THREE_YEAR_FIXED_INSURABLE)
            .fourYearFixedInsurable(UPDATED_FOUR_YEAR_FIXED_INSURABLE)
            .fiveYearFixedInsurable(UPDATED_FIVE_YEAR_FIXED_INSURABLE)
            .oneYearFixedConventional(UPDATED_ONE_YEAR_FIXED_CONVENTIONAL)
            .twoYearFixedConventional(UPDATED_TWO_YEAR_FIXED_CONVENTIONAL)
            .threeYearFixedConventional(UPDATED_THREE_YEAR_FIXED_CONVENTIONAL)
            .fourYearFixedConventional(UPDATED_FOUR_YEAR_FIXED_CONVENTIONAL)
            .fiveYearFixedConventional(UPDATED_FIVE_YEAR_FIXED_CONVENTIONAL)
            .fiveYearVariableInsured(UPDATED_FIVE_YEAR_VARIABLE_INSURED)
            .fiveYearVariableInsurable(UPDATED_FIVE_YEAR_VARIABLE_INSURABLE)
            .fiveYearVariableConventional(UPDATED_FIVE_YEAR_VARIABLE_CONVENTIONAL);
        return rateConfig;
    }

    @AfterEach
    public void cleanupElasticSearchRepository() {
        rateConfigSearchRepository.deleteAll().block();
        assertThat(rateConfigSearchRepository.count().block()).isEqualTo(0);
    }

    @BeforeEach
    public void initTest() {
        rateConfigRepository.deleteAll().block();
        rateConfig = createEntity();
    }

    @Test
    void createRateConfig() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        // Create the RateConfig
        var returnedRateConfig = webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isCreated()
            .expectBody(RateConfig.class)
            .returnResult()
            .getResponseBody();

        // Validate the RateConfig in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertRateConfigUpdatableFieldsEquals(returnedRateConfig, getPersistedRateConfig(returnedRateConfig));

        await()
            .atMost(5, TimeUnit.SECONDS)
            .untilAsserted(() -> {
                int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
                assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore + 1);
            });
    }

    @Test
    void createRateConfigWithExistingId() throws Exception {
        // Create the RateConfig with an existing ID
        rateConfig.setId("existing_id");

        long databaseSizeBeforeCreate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void getAllRateConfigsAsStream() {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        List<RateConfig> rateConfigList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(RateConfig.class)
            .getResponseBody()
            .filter(rateConfig::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(rateConfigList).isNotNull();
        assertThat(rateConfigList).hasSize(1);
        RateConfig testRateConfig = rateConfigList.get(0);

        assertRateConfigAllPropertiesEquals(rateConfig, testRateConfig);
    }

    @Test
    void getAllRateConfigs() {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        // Get all the rateConfigList
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
            .value(hasItem(rateConfig.getId()))
            .jsonPath("$.[*].oneYearFixedInsured")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].twoYearFixedInsured")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].threeYearFixedInsured")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].fourYearFixedInsured")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].fiveYearFixedInsured")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].oneYearFixedInsurable")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].twoYearFixedInsurable")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].threeYearFixedInsurable")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].fourYearFixedInsurable")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].fiveYearFixedInsurable")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].oneYearFixedConventional")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].twoYearFixedConventional")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].threeYearFixedConventional")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fourYearFixedConventional")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fiveYearFixedConventional")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fiveYearVariableInsured")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_INSURED))
            .jsonPath("$.[*].fiveYearVariableInsurable")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_INSURABLE))
            .jsonPath("$.[*].fiveYearVariableConventional")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_CONVENTIONAL));
    }

    @Test
    void getRateConfig() {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        // Get the rateConfig
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, rateConfig.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(rateConfig.getId()))
            .jsonPath("$.oneYearFixedInsured")
            .value(is(DEFAULT_ONE_YEAR_FIXED_INSURED))
            .jsonPath("$.twoYearFixedInsured")
            .value(is(DEFAULT_TWO_YEAR_FIXED_INSURED))
            .jsonPath("$.threeYearFixedInsured")
            .value(is(DEFAULT_THREE_YEAR_FIXED_INSURED))
            .jsonPath("$.fourYearFixedInsured")
            .value(is(DEFAULT_FOUR_YEAR_FIXED_INSURED))
            .jsonPath("$.fiveYearFixedInsured")
            .value(is(DEFAULT_FIVE_YEAR_FIXED_INSURED))
            .jsonPath("$.oneYearFixedInsurable")
            .value(is(DEFAULT_ONE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.twoYearFixedInsurable")
            .value(is(DEFAULT_TWO_YEAR_FIXED_INSURABLE))
            .jsonPath("$.threeYearFixedInsurable")
            .value(is(DEFAULT_THREE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.fourYearFixedInsurable")
            .value(is(DEFAULT_FOUR_YEAR_FIXED_INSURABLE))
            .jsonPath("$.fiveYearFixedInsurable")
            .value(is(DEFAULT_FIVE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.oneYearFixedConventional")
            .value(is(DEFAULT_ONE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.twoYearFixedConventional")
            .value(is(DEFAULT_TWO_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.threeYearFixedConventional")
            .value(is(DEFAULT_THREE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.fourYearFixedConventional")
            .value(is(DEFAULT_FOUR_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.fiveYearFixedConventional")
            .value(is(DEFAULT_FIVE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.fiveYearVariableInsured")
            .value(is(DEFAULT_FIVE_YEAR_VARIABLE_INSURED))
            .jsonPath("$.fiveYearVariableInsurable")
            .value(is(DEFAULT_FIVE_YEAR_VARIABLE_INSURABLE))
            .jsonPath("$.fiveYearVariableConventional")
            .value(is(DEFAULT_FIVE_YEAR_VARIABLE_CONVENTIONAL));
    }

    @Test
    void getNonExistingRateConfig() {
        // Get the rateConfig
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_PROBLEM_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putExistingRateConfig() throws Exception {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();
        rateConfigSearchRepository.save(rateConfig).block();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());

        // Update the rateConfig
        RateConfig updatedRateConfig = rateConfigRepository.findById(rateConfig.getId()).block();
        updatedRateConfig
            .oneYearFixedInsured(UPDATED_ONE_YEAR_FIXED_INSURED)
            .twoYearFixedInsured(UPDATED_TWO_YEAR_FIXED_INSURED)
            .threeYearFixedInsured(UPDATED_THREE_YEAR_FIXED_INSURED)
            .fourYearFixedInsured(UPDATED_FOUR_YEAR_FIXED_INSURED)
            .fiveYearFixedInsured(UPDATED_FIVE_YEAR_FIXED_INSURED)
            .oneYearFixedInsurable(UPDATED_ONE_YEAR_FIXED_INSURABLE)
            .twoYearFixedInsurable(UPDATED_TWO_YEAR_FIXED_INSURABLE)
            .threeYearFixedInsurable(UPDATED_THREE_YEAR_FIXED_INSURABLE)
            .fourYearFixedInsurable(UPDATED_FOUR_YEAR_FIXED_INSURABLE)
            .fiveYearFixedInsurable(UPDATED_FIVE_YEAR_FIXED_INSURABLE)
            .oneYearFixedConventional(UPDATED_ONE_YEAR_FIXED_CONVENTIONAL)
            .twoYearFixedConventional(UPDATED_TWO_YEAR_FIXED_CONVENTIONAL)
            .threeYearFixedConventional(UPDATED_THREE_YEAR_FIXED_CONVENTIONAL)
            .fourYearFixedConventional(UPDATED_FOUR_YEAR_FIXED_CONVENTIONAL)
            .fiveYearFixedConventional(UPDATED_FIVE_YEAR_FIXED_CONVENTIONAL)
            .fiveYearVariableInsured(UPDATED_FIVE_YEAR_VARIABLE_INSURED)
            .fiveYearVariableInsurable(UPDATED_FIVE_YEAR_VARIABLE_INSURABLE)
            .fiveYearVariableConventional(UPDATED_FIVE_YEAR_VARIABLE_CONVENTIONAL);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedRateConfig.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(updatedRateConfig))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedRateConfigToMatchAllProperties(updatedRateConfig);

        await()
            .atMost(5, TimeUnit.SECONDS)
            .untilAsserted(() -> {
                int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
                assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
                List<RateConfig> rateConfigSearchList = Streamable.of(rateConfigSearchRepository.findAll().collectList().block()).toList();
                RateConfig testRateConfigSearch = rateConfigSearchList.get(searchDatabaseSizeAfter - 1);

                assertRateConfigAllPropertiesEquals(testRateConfigSearch, updatedRateConfig);
            });
    }

    @Test
    void putNonExistingRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, rateConfig.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void putWithIdMismatchRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, UUID.randomUUID().toString())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void putWithMissingIdPathParamRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void partialUpdateRateConfigWithPatch() throws Exception {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the rateConfig using partial update
        RateConfig partialUpdatedRateConfig = new RateConfig();
        partialUpdatedRateConfig.setId(rateConfig.getId());

        partialUpdatedRateConfig
            .twoYearFixedInsured(UPDATED_TWO_YEAR_FIXED_INSURED)
            .fourYearFixedInsured(UPDATED_FOUR_YEAR_FIXED_INSURED)
            .fiveYearFixedInsured(UPDATED_FIVE_YEAR_FIXED_INSURED)
            .threeYearFixedInsurable(UPDATED_THREE_YEAR_FIXED_INSURABLE)
            .fourYearFixedInsurable(UPDATED_FOUR_YEAR_FIXED_INSURABLE)
            .fiveYearFixedInsurable(UPDATED_FIVE_YEAR_FIXED_INSURABLE)
            .twoYearFixedConventional(UPDATED_TWO_YEAR_FIXED_CONVENTIONAL)
            .fiveYearFixedConventional(UPDATED_FIVE_YEAR_FIXED_CONVENTIONAL)
            .fiveYearVariableInsured(UPDATED_FIVE_YEAR_VARIABLE_INSURED);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedRateConfig.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedRateConfig))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the RateConfig in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRateConfigUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedRateConfig, rateConfig),
            getPersistedRateConfig(rateConfig)
        );
    }

    @Test
    void fullUpdateRateConfigWithPatch() throws Exception {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the rateConfig using partial update
        RateConfig partialUpdatedRateConfig = new RateConfig();
        partialUpdatedRateConfig.setId(rateConfig.getId());

        partialUpdatedRateConfig
            .oneYearFixedInsured(UPDATED_ONE_YEAR_FIXED_INSURED)
            .twoYearFixedInsured(UPDATED_TWO_YEAR_FIXED_INSURED)
            .threeYearFixedInsured(UPDATED_THREE_YEAR_FIXED_INSURED)
            .fourYearFixedInsured(UPDATED_FOUR_YEAR_FIXED_INSURED)
            .fiveYearFixedInsured(UPDATED_FIVE_YEAR_FIXED_INSURED)
            .oneYearFixedInsurable(UPDATED_ONE_YEAR_FIXED_INSURABLE)
            .twoYearFixedInsurable(UPDATED_TWO_YEAR_FIXED_INSURABLE)
            .threeYearFixedInsurable(UPDATED_THREE_YEAR_FIXED_INSURABLE)
            .fourYearFixedInsurable(UPDATED_FOUR_YEAR_FIXED_INSURABLE)
            .fiveYearFixedInsurable(UPDATED_FIVE_YEAR_FIXED_INSURABLE)
            .oneYearFixedConventional(UPDATED_ONE_YEAR_FIXED_CONVENTIONAL)
            .twoYearFixedConventional(UPDATED_TWO_YEAR_FIXED_CONVENTIONAL)
            .threeYearFixedConventional(UPDATED_THREE_YEAR_FIXED_CONVENTIONAL)
            .fourYearFixedConventional(UPDATED_FOUR_YEAR_FIXED_CONVENTIONAL)
            .fiveYearFixedConventional(UPDATED_FIVE_YEAR_FIXED_CONVENTIONAL)
            .fiveYearVariableInsured(UPDATED_FIVE_YEAR_VARIABLE_INSURED)
            .fiveYearVariableInsurable(UPDATED_FIVE_YEAR_VARIABLE_INSURABLE)
            .fiveYearVariableConventional(UPDATED_FIVE_YEAR_VARIABLE_CONVENTIONAL);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedRateConfig.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedRateConfig))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the RateConfig in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertRateConfigUpdatableFieldsEquals(partialUpdatedRateConfig, getPersistedRateConfig(partialUpdatedRateConfig));
    }

    @Test
    void patchNonExistingRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, rateConfig.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void patchWithIdMismatchRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, UUID.randomUUID().toString())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void patchWithMissingIdPathParamRateConfig() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        rateConfig.setId(UUID.randomUUID().toString());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(rateConfig))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the RateConfig in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore);
    }

    @Test
    void deleteRateConfig() {
        // Initialize the database
        rateConfigRepository.save(rateConfig).block();
        rateConfigRepository.save(rateConfig).block();
        rateConfigSearchRepository.save(rateConfig).block();

        long databaseSizeBeforeDelete = getRepositoryCount();
        int searchDatabaseSizeBefore = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeBefore).isEqualTo(databaseSizeBeforeDelete);

        // Delete the rateConfig
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, rateConfig.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
        int searchDatabaseSizeAfter = IterableUtil.sizeOf(rateConfigSearchRepository.findAll().collectList().block());
        assertThat(searchDatabaseSizeAfter).isEqualTo(searchDatabaseSizeBefore - 1);
    }

    @Test
    void searchRateConfig() {
        // Initialize the database
        rateConfig = rateConfigRepository.save(rateConfig).block();
        rateConfigSearchRepository.save(rateConfig).block();

        // Search the rateConfig
        webTestClient
            .get()
            .uri(ENTITY_SEARCH_API_URL + "?query=id:" + rateConfig.getId())
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(rateConfig.getId()))
            .jsonPath("$.[*].oneYearFixedInsured")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].twoYearFixedInsured")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].threeYearFixedInsured")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].fourYearFixedInsured")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].fiveYearFixedInsured")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_INSURED))
            .jsonPath("$.[*].oneYearFixedInsurable")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].twoYearFixedInsurable")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].threeYearFixedInsurable")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].fourYearFixedInsurable")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].fiveYearFixedInsurable")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_INSURABLE))
            .jsonPath("$.[*].oneYearFixedConventional")
            .value(hasItem(DEFAULT_ONE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].twoYearFixedConventional")
            .value(hasItem(DEFAULT_TWO_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].threeYearFixedConventional")
            .value(hasItem(DEFAULT_THREE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fourYearFixedConventional")
            .value(hasItem(DEFAULT_FOUR_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fiveYearFixedConventional")
            .value(hasItem(DEFAULT_FIVE_YEAR_FIXED_CONVENTIONAL))
            .jsonPath("$.[*].fiveYearVariableInsured")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_INSURED))
            .jsonPath("$.[*].fiveYearVariableInsurable")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_INSURABLE))
            .jsonPath("$.[*].fiveYearVariableConventional")
            .value(hasItem(DEFAULT_FIVE_YEAR_VARIABLE_CONVENTIONAL));
    }

    protected long getRepositoryCount() {
        return rateConfigRepository.count().block();
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

    protected RateConfig getPersistedRateConfig(RateConfig rateConfig) {
        return rateConfigRepository.findById(rateConfig.getId()).block();
    }

    protected void assertPersistedRateConfigToMatchAllProperties(RateConfig expectedRateConfig) {
        assertRateConfigAllPropertiesEquals(expectedRateConfig, getPersistedRateConfig(expectedRateConfig));
    }

    protected void assertPersistedRateConfigToMatchUpdatableProperties(RateConfig expectedRateConfig) {
        assertRateConfigAllUpdatablePropertiesEquals(expectedRateConfig, getPersistedRateConfig(expectedRateConfig));
    }
}
