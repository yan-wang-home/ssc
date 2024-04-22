package com.mortgagehub.config.dbmigrations;

import com.mortgagehub.config.Constants;
import com.mortgagehub.domain.Authority;
import com.mortgagehub.domain.RateConfig;
import com.mortgagehub.domain.User;
import com.mortgagehub.security.AuthoritiesConstants;
import io.mongock.api.annotations.ChangeUnit;
import io.mongock.api.annotations.Execution;
import io.mongock.api.annotations.RollbackExecution;
import java.time.Instant;
import java.util.Collections;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 * Creates the initial database setup.
 */
@ChangeUnit(id = "users-initialization", order = "001")
public class InitialSetupMigration {

    private final MongoTemplate template;

    public InitialSetupMigration(MongoTemplate template) {
        this.template = template;
    }

    @Execution
    public void changeSet() {
        Authority userAuthority = createUserAuthority();
        userAuthority = template.save(userAuthority);
        Authority adminAuthority = createAdminAuthority();
        adminAuthority = template.save(adminAuthority);
        addUsers(userAuthority, adminAuthority);
        addDefaultRateConfig();
    }

    @RollbackExecution
    public void rollback() {}

    private Authority createAuthority(String authority) {
        Authority adminAuthority = new Authority();
        adminAuthority.setName(authority);
        return adminAuthority;
    }

    private Authority createAdminAuthority() {
        Authority adminAuthority = createAuthority(AuthoritiesConstants.ADMIN);
        return adminAuthority;
    }

    private Authority createUserAuthority() {
        Authority userAuthority = createAuthority(AuthoritiesConstants.USER);
        return userAuthority;
    }

    private void addUsers(Authority userAuthority, Authority adminAuthority) {
        //        User user = createUser(userAuthority);
        //        template.save(user);
        User admin = createAdmin(adminAuthority, userAuthority);
        template.save(admin);
        User superAdmin = createSuperAdmin(adminAuthority, userAuthority);
        template.save(superAdmin);
    }

    private void addDefaultRateConfig() {
        RateConfig rateConfig = createRateConfig();

        rateConfig.setId("most-recent-rate");

        rateConfig.setTwoYearFixedInsured("7.14%");
        rateConfig.setTwoYearFixedInsurable("7.14%");
        rateConfig.setTwoYearFixedConventional("6.26%");

        rateConfig.setThreeYearFixedInsured("5.45%");
        rateConfig.setThreeYearFixedInsurable("5.45%");
        rateConfig.setThreeYearFixedConventional("5.09%");

        rateConfig.setFourYearFixedInsured("5.59%");
        rateConfig.setFourYearFixedInsurable("5.59%");
        rateConfig.setFourYearFixedConventional("5.19%");

        rateConfig.setFiveYearFixedInsured("4.99%");
        rateConfig.setFiveYearFixedInsurable("4.99%");
        rateConfig.setFiveYearFixedConventional("5.04%");

        rateConfig.setFiveYearVariableInsured("P-0.9%");
        rateConfig.setFiveYearVariableInsurable("P-0.9%");
        rateConfig.setFiveYearVariableConventional("P-0.15%");

        template.save(rateConfig);
    }

    private User createUser(Authority userAuthority) {
        User userUser = new User();
        userUser.setId("user-2");
        userUser.setLogin("user");
        userUser.setPassword("$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K");
        userUser.setFirstName("User");
        userUser.setLastName("User");
        userUser.setEmail("user@localhost");
        userUser.setActivated(true);
        userUser.setLangKey("en");
        userUser.setCreatedBy(Constants.SYSTEM);
        userUser.setCreatedDate(Instant.now());
        userUser.getAuthorities().add(userAuthority);
        userUser.setApplications(Collections.emptyList());
        return userUser;
    }

    private User createSuperAdmin(Authority adminAuthority, Authority userAuthority) {
        User adminUser = new User();
        adminUser.setId("super-user");
        adminUser.setLogin("ssc-super-admin");
        adminUser.setPassword("$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC");
        adminUser.setFirstName("admin");
        adminUser.setLastName("Super Administrator");
        adminUser.setEmail("admin@ssc.finance");
        adminUser.setApplicationStatus(null);
        adminUser.setApplications(Collections.emptyList());
        adminUser.setActivated(true);
        adminUser.setLangKey("en");
        adminUser.setCreatedBy(Constants.SYSTEM);
        adminUser.setCreatedDate(Instant.now());
        adminUser.getAuthorities().add(adminAuthority);
        adminUser.getAuthorities().add(userAuthority);
        return adminUser;
    }

    private User createAdmin(Authority adminAuthority, Authority userAuthority) {
        User adminUser = new User();
        adminUser.setId("admin-user");
        adminUser.setLogin("admin");
        adminUser.setPassword("$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC");
        adminUser.setFirstName("admin");
        adminUser.setLastName("Administrator");
        adminUser.setEmail("admin@localhost");
        adminUser.setApplicationStatus(null);
        adminUser.setApplications(Collections.emptyList());
        adminUser.setActivated(true);
        adminUser.setLangKey("en");
        adminUser.setCreatedBy(Constants.SYSTEM);
        adminUser.setCreatedDate(Instant.now());
        adminUser.getAuthorities().add(adminAuthority);
        adminUser.getAuthorities().add(userAuthority);
        return adminUser;
    }

    private RateConfig createRateConfig() {
        RateConfig rateConfig = new RateConfig();
        rateConfig.setOneYearFixedInsured("");
        rateConfig.setOneYearFixedInsurable("");
        rateConfig.setOneYearFixedConventional("");
        rateConfig.setTwoYearFixedInsured("7.14%");
        rateConfig.setTwoYearFixedInsurable("7.14%");
        rateConfig.setThreeYearFixedConventional("6.26%");
        rateConfig.setThreeYearFixedInsured("5.45%");
        rateConfig.setThreeYearFixedInsurable("5.45%");
        rateConfig.setFourYearFixedConventional("5.09%");
        rateConfig.setFourYearFixedInsured("5.59%");
        rateConfig.setFourYearFixedInsurable("5.59%");
        rateConfig.setFiveYearFixedConventional("5.19%");
        rateConfig.setFiveYearFixedInsured("4.99%");
        rateConfig.setFiveYearFixedInsurable("4.99%");
        rateConfig.setFiveYearFixedConventional("5.04%");
        rateConfig.setFiveYearVariableInsured("P-0.9%");
        rateConfig.setFiveYearVariableInsurable("P-0.9%");
        rateConfig.setFiveYearVariableInsurable("P-0.15%");

        return rateConfig;
    }
}
