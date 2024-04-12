package com.mortgagehub.service;

import com.mortgagehub.domain.RateConfig;
import com.mortgagehub.repository.RateConfigRepository;
import com.mortgagehub.repository.search.RateConfigSearchRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * Service Implementation for managing {@link com.mortgagehub.domain.RateConfig}.
 */
@Service
public class RateConfigService {

    private final Logger log = LoggerFactory.getLogger(RateConfigService.class);

    private final RateConfigRepository rateConfigRepository;

    private final RateConfigSearchRepository rateConfigSearchRepository;

    public RateConfigService(RateConfigRepository rateConfigRepository, RateConfigSearchRepository rateConfigSearchRepository) {
        this.rateConfigRepository = rateConfigRepository;
        this.rateConfigSearchRepository = rateConfigSearchRepository;
    }

    /**
     * Save a rateConfig.
     *
     * @param rateConfig the entity to save.
     * @return the persisted entity.
     */
    public Mono<RateConfig> save(RateConfig rateConfig) {
        log.debug("Request to save RateConfig : {}", rateConfig);
        return rateConfigRepository.save(rateConfig).flatMap(rateConfigSearchRepository::save);
    }

    /**
     * Update a rateConfig.
     *
     * @param rateConfig the entity to save.
     * @return the persisted entity.
     */
    public Mono<RateConfig> update(RateConfig rateConfig) {
        log.debug("Request to update RateConfig : {}", rateConfig);
        return rateConfigRepository.save(rateConfig).flatMap(rateConfigSearchRepository::save);
    }

    /**
     * Partially update a rateConfig.
     *
     * @param rateConfig the entity to update partially.
     * @return the persisted entity.
     */
    public Mono<RateConfig> partialUpdate(RateConfig rateConfig) {
        log.debug("Request to partially update RateConfig : {}", rateConfig);

        return rateConfigRepository
            .findById(rateConfig.getId())
            .map(existingRateConfig -> {
                if (rateConfig.getOneYearFixedInsured() != null) {
                    existingRateConfig.setOneYearFixedInsured(rateConfig.getOneYearFixedInsured());
                }
                if (rateConfig.getTwoYearFixedInsured() != null) {
                    existingRateConfig.setTwoYearFixedInsured(rateConfig.getTwoYearFixedInsured());
                }
                if (rateConfig.getThreeYearFixedInsured() != null) {
                    existingRateConfig.setThreeYearFixedInsured(rateConfig.getThreeYearFixedInsured());
                }
                if (rateConfig.getFourYearFixedInsured() != null) {
                    existingRateConfig.setFourYearFixedInsured(rateConfig.getFourYearFixedInsured());
                }
                if (rateConfig.getFiveYearFixedInsured() != null) {
                    existingRateConfig.setFiveYearFixedInsured(rateConfig.getFiveYearFixedInsured());
                }
                if (rateConfig.getOneYearFixedInsurable() != null) {
                    existingRateConfig.setOneYearFixedInsurable(rateConfig.getOneYearFixedInsurable());
                }
                if (rateConfig.getTwoYearFixedInsurable() != null) {
                    existingRateConfig.setTwoYearFixedInsurable(rateConfig.getTwoYearFixedInsurable());
                }
                if (rateConfig.getThreeYearFixedInsurable() != null) {
                    existingRateConfig.setThreeYearFixedInsurable(rateConfig.getThreeYearFixedInsurable());
                }
                if (rateConfig.getFourYearFixedInsurable() != null) {
                    existingRateConfig.setFourYearFixedInsurable(rateConfig.getFourYearFixedInsurable());
                }
                if (rateConfig.getFiveYearFixedInsurable() != null) {
                    existingRateConfig.setFiveYearFixedInsurable(rateConfig.getFiveYearFixedInsurable());
                }
                if (rateConfig.getOneYearFixedConventional() != null) {
                    existingRateConfig.setOneYearFixedConventional(rateConfig.getOneYearFixedConventional());
                }
                if (rateConfig.getTwoYearFixedConventional() != null) {
                    existingRateConfig.setTwoYearFixedConventional(rateConfig.getTwoYearFixedConventional());
                }
                if (rateConfig.getThreeYearFixedConventional() != null) {
                    existingRateConfig.setThreeYearFixedConventional(rateConfig.getThreeYearFixedConventional());
                }
                if (rateConfig.getFourYearFixedConventional() != null) {
                    existingRateConfig.setFourYearFixedConventional(rateConfig.getFourYearFixedConventional());
                }
                if (rateConfig.getFiveYearFixedConventional() != null) {
                    existingRateConfig.setFiveYearFixedConventional(rateConfig.getFiveYearFixedConventional());
                }
                if (rateConfig.getFiveYearVariableInsured() != null) {
                    existingRateConfig.setFiveYearVariableInsured(rateConfig.getFiveYearVariableInsured());
                }
                if (rateConfig.getFiveYearVariableInsurable() != null) {
                    existingRateConfig.setFiveYearVariableInsurable(rateConfig.getFiveYearVariableInsurable());
                }
                if (rateConfig.getFiveYearVariableConventional() != null) {
                    existingRateConfig.setFiveYearVariableConventional(rateConfig.getFiveYearVariableConventional());
                }

                return existingRateConfig;
            })
            .flatMap(rateConfigRepository::save)
            .flatMap(savedRateConfig -> {
                rateConfigSearchRepository.save(savedRateConfig);
                return Mono.just(savedRateConfig);
            });
    }

    /**
     * Get all the rateConfigs.
     *
     * @return the list of entities.
     */
    public Flux<RateConfig> findAll() {
        log.debug("Request to get all RateConfigs");
        return rateConfigRepository.findAll();
    }

    /**
     * Returns the number of rateConfigs available.
     * @return the number of entities in the database.
     *
     */
    public Mono<Long> countAll() {
        return rateConfigRepository.count();
    }

    /**
     * Returns the number of rateConfigs available in search repository.
     *
     */
    public Mono<Long> searchCount() {
        return rateConfigSearchRepository.count();
    }

    /**
     * Get one rateConfig by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    public Mono<RateConfig> findOne(String id) {
        log.debug("Request to get RateConfig : {}", id);
        return rateConfigRepository.findById(id);
    }

    /**
     * Delete the rateConfig by id.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    public Mono<Void> delete(String id) {
        log.debug("Request to delete RateConfig : {}", id);
        return rateConfigRepository.deleteById(id).then(rateConfigSearchRepository.deleteById(id));
    }

    /**
     * Search for the rateConfig corresponding to the query.
     *
     * @param query the query of the search.
     * @return the list of entities.
     */
    public Flux<RateConfig> search(String query) {
        log.debug("Request to search RateConfigs for query {}", query);
        try {
            return rateConfigSearchRepository.search(query);
        } catch (RuntimeException e) {
            throw e;
        }
    }
}
