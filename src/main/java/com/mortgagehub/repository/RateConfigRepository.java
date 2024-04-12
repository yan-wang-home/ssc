package com.mortgagehub.repository;

import com.mortgagehub.domain.RateConfig;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data MongoDB reactive repository for the RateConfig entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RateConfigRepository extends ReactiveMongoRepository<RateConfig, String> {}
