package com.mortgagehub.domain;

import static com.mortgagehub.domain.RateConfigTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.mortgagehub.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class RateConfigTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(RateConfig.class);
        RateConfig rateConfig1 = getRateConfigSample1();
        RateConfig rateConfig2 = new RateConfig();
        assertThat(rateConfig1).isNotEqualTo(rateConfig2);

        rateConfig2.setId(rateConfig1.getId());
        assertThat(rateConfig1).isEqualTo(rateConfig2);

        rateConfig2 = getRateConfigSample2();
        assertThat(rateConfig1).isNotEqualTo(rateConfig2);
    }
}
