package com.mortgagehub.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import com.mortgagehub.domain.RateConfig;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.client.elc.ReactiveElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ReactiveElasticsearchRepository;
import reactor.core.publisher.Flux;

/**
 * Spring Data Elasticsearch repository for the {@link RateConfig} entity.
 */
public interface RateConfigSearchRepository
    extends ReactiveElasticsearchRepository<RateConfig, String>, RateConfigSearchRepositoryInternal {}

interface RateConfigSearchRepositoryInternal {
    Flux<RateConfig> search(String query);

    Flux<RateConfig> search(Query query);
}

class RateConfigSearchRepositoryInternalImpl implements RateConfigSearchRepositoryInternal {

    private final ReactiveElasticsearchTemplate reactiveElasticsearchTemplate;

    RateConfigSearchRepositoryInternalImpl(ReactiveElasticsearchTemplate reactiveElasticsearchTemplate) {
        this.reactiveElasticsearchTemplate = reactiveElasticsearchTemplate;
    }

    @Override
    public Flux<RateConfig> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Flux<RateConfig> search(Query query) {
        return reactiveElasticsearchTemplate.search(query, RateConfig.class).map(SearchHit::getContent);
    }
}
