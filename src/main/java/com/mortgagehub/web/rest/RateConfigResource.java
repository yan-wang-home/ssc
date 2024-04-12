package com.mortgagehub.web.rest;

import com.mortgagehub.domain.RateConfig;
import com.mortgagehub.repository.RateConfigRepository;
import com.mortgagehub.service.RateConfigService;
import com.mortgagehub.web.rest.errors.BadRequestAlertException;
import com.mortgagehub.web.rest.errors.ElasticsearchExceptionMapper;
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
 * REST controller for managing {@link com.mortgagehub.domain.RateConfig}.
 */
@RestController
@RequestMapping("/api/rate-configs")
public class RateConfigResource {

    private final Logger log = LoggerFactory.getLogger(RateConfigResource.class);

    private static final String ENTITY_NAME = "rateConfig";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final RateConfigService rateConfigService;

    private final RateConfigRepository rateConfigRepository;

    public RateConfigResource(RateConfigService rateConfigService, RateConfigRepository rateConfigRepository) {
        this.rateConfigService = rateConfigService;
        this.rateConfigRepository = rateConfigRepository;
    }

    /**
     * {@code POST  /rate-configs} : Create a new rateConfig.
     *
     * @param rateConfig the rateConfig to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new rateConfig, or with status {@code 400 (Bad Request)} if the rateConfig has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public Mono<ResponseEntity<RateConfig>> createRateConfig(@RequestBody RateConfig rateConfig) throws URISyntaxException {
        log.debug("REST request to save RateConfig : {}", rateConfig);
        if (rateConfig.getId() != null) {
            throw new BadRequestAlertException("A new rateConfig cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return rateConfigService
            .save(rateConfig)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/rate-configs/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /rate-configs/:id} : Updates an existing rateConfig.
     *
     * @param id the id of the rateConfig to save.
     * @param rateConfig the rateConfig to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated rateConfig,
     * or with status {@code 400 (Bad Request)} if the rateConfig is not valid,
     * or with status {@code 500 (Internal Server Error)} if the rateConfig couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public Mono<ResponseEntity<RateConfig>> updateRateConfig(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody RateConfig rateConfig
    ) throws URISyntaxException {
        log.debug("REST request to update RateConfig : {}, {}", id, rateConfig);
        if (rateConfig.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, rateConfig.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return rateConfigRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return rateConfigService
                    .update(rateConfig)
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
     * {@code PATCH  /rate-configs/:id} : Partial updates given fields of an existing rateConfig, field will ignore if it is null
     *
     * @param id the id of the rateConfig to save.
     * @param rateConfig the rateConfig to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated rateConfig,
     * or with status {@code 400 (Bad Request)} if the rateConfig is not valid,
     * or with status {@code 404 (Not Found)} if the rateConfig is not found,
     * or with status {@code 500 (Internal Server Error)} if the rateConfig couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<RateConfig>> partialUpdateRateConfig(
        @PathVariable(value = "id", required = false) final String id,
        @RequestBody RateConfig rateConfig
    ) throws URISyntaxException {
        log.debug("REST request to partial update RateConfig partially : {}, {}", id, rateConfig);
        if (rateConfig.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, rateConfig.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return rateConfigRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<RateConfig> result = rateConfigService.partialUpdate(rateConfig);

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
     * {@code GET  /rate-configs} : get all the rateConfigs.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of rateConfigs in body.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<List<RateConfig>> getAllRateConfigs() {
        log.debug("REST request to get all RateConfigs");
        return rateConfigService.findAll().collectList();
    }

    /**
     * {@code GET  /rate-configs} : get all the rateConfigs as a stream.
     * @return the {@link Flux} of rateConfigs.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public Flux<RateConfig> getAllRateConfigsAsStream() {
        log.debug("REST request to get all RateConfigs as a stream");
        return rateConfigService.findAll();
    }

    /**
     * {@code GET  /rate-configs/:id} : get the "id" rateConfig.
     *
     * @param id the id of the rateConfig to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the rateConfig, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public Mono<ResponseEntity<RateConfig>> getRateConfig(@PathVariable("id") String id) {
        log.debug("REST request to get RateConfig : {}", id);
        Mono<RateConfig> rateConfig = rateConfigService.findOne(id);
        return ResponseUtil.wrapOrNotFound(rateConfig);
    }

    /**
     * {@code DELETE  /rate-configs/:id} : delete the "id" rateConfig.
     *
     * @param id the id of the rateConfig to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> deleteRateConfig(@PathVariable("id") String id) {
        log.debug("REST request to delete RateConfig : {}", id);
        return rateConfigService
            .delete(id)
            .then(
                Mono.just(
                    ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id)).build()
                )
            );
    }

    /**
     * {@code SEARCH  /rate-configs/_search?query=:query} : search for the rateConfig corresponding
     * to the query.
     *
     * @param query the query of the rateConfig search.
     * @return the result of the search.
     */
    @GetMapping("/_search")
    public Mono<List<RateConfig>> searchRateConfigs(@RequestParam("query") String query) {
        log.debug("REST request to search RateConfigs for query {}", query);
        try {
            return rateConfigService.search(query).collectList();
        } catch (RuntimeException e) {
            throw ElasticsearchExceptionMapper.mapException(e);
        }
    }
}
