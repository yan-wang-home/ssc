package com.mortgagehub.repository.search;

import co.elastic.clients.elasticsearch._types.query_dsl.QueryStringQuery;
import com.mortgagehub.domain.ContactForm;
import org.springframework.data.elasticsearch.client.elc.NativeQuery;
import org.springframework.data.elasticsearch.client.elc.ReactiveElasticsearchTemplate;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.Query;
import org.springframework.data.elasticsearch.repository.ReactiveElasticsearchRepository;
import reactor.core.publisher.Flux;

/**
 * Spring Data Elasticsearch repository for the {@link ContactForm} entity.
 */
public interface ContactFormSearchRepository
    extends ReactiveElasticsearchRepository<ContactForm, String>, ContactFormSearchRepositoryInternal {}

interface ContactFormSearchRepositoryInternal {
    Flux<ContactForm> search(String query);

    Flux<ContactForm> search(Query query);
}

class ContactFormSearchRepositoryInternalImpl implements ContactFormSearchRepositoryInternal {

    private final ReactiveElasticsearchTemplate reactiveElasticsearchTemplate;

    ContactFormSearchRepositoryInternalImpl(ReactiveElasticsearchTemplate reactiveElasticsearchTemplate) {
        this.reactiveElasticsearchTemplate = reactiveElasticsearchTemplate;
    }

    @Override
    public Flux<ContactForm> search(String query) {
        NativeQuery nativeQuery = new NativeQuery(QueryStringQuery.of(qs -> qs.query(query))._toQuery());
        return search(nativeQuery);
    }

    @Override
    public Flux<ContactForm> search(Query query) {
        return reactiveElasticsearchTemplate.search(query, ContactForm.class).map(SearchHit::getContent);
    }
}
