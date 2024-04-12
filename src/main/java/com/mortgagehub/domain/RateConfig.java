package com.mortgagehub.domain;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A RateConfig.
 */
@Document(collection = "rate_config")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "rateconfig")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class RateConfig implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("one_year_fixed_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String oneYearFixedInsured;

    @Field("two_year_fixed_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String twoYearFixedInsured;

    @Field("three_year_fixed_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String threeYearFixedInsured;

    @Field("four_year_fixed_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fourYearFixedInsured;

    @Field("five_year_fixed_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearFixedInsured;

    @Field("one_year_fixed_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String oneYearFixedInsurable;

    @Field("two_year_fixed_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String twoYearFixedInsurable;

    @Field("three_year_fixed_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String threeYearFixedInsurable;

    @Field("four_year_fixed_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fourYearFixedInsurable;

    @Field("five_year_fixed_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearFixedInsurable;

    @Field("one_year_fixed_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String oneYearFixedConventional;

    @Field("two_year_fixed_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String twoYearFixedConventional;

    @Field("three_year_fixed_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String threeYearFixedConventional;

    @Field("four_year_fixed_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fourYearFixedConventional;

    @Field("five_year_fixed_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearFixedConventional;

    @Field("five_year_variable_insured")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearVariableInsured;

    @Field("five_year_variable_insurable")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearVariableInsurable;

    @Field("five_year_variable_conventional")
    @org.springframework.data.elasticsearch.annotations.Field(type = org.springframework.data.elasticsearch.annotations.FieldType.Text)
    private String fiveYearVariableConventional;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public String getId() {
        return this.id;
    }

    public RateConfig id(String id) {
        this.setId(id);
        return this;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOneYearFixedInsured() {
        return this.oneYearFixedInsured;
    }

    public RateConfig oneYearFixedInsured(String oneYearFixedInsured) {
        this.setOneYearFixedInsured(oneYearFixedInsured);
        return this;
    }

    public void setOneYearFixedInsured(String oneYearFixedInsured) {
        this.oneYearFixedInsured = oneYearFixedInsured;
    }

    public String getTwoYearFixedInsured() {
        return this.twoYearFixedInsured;
    }

    public RateConfig twoYearFixedInsured(String twoYearFixedInsured) {
        this.setTwoYearFixedInsured(twoYearFixedInsured);
        return this;
    }

    public void setTwoYearFixedInsured(String twoYearFixedInsured) {
        this.twoYearFixedInsured = twoYearFixedInsured;
    }

    public String getThreeYearFixedInsured() {
        return this.threeYearFixedInsured;
    }

    public RateConfig threeYearFixedInsured(String threeYearFixedInsured) {
        this.setThreeYearFixedInsured(threeYearFixedInsured);
        return this;
    }

    public void setThreeYearFixedInsured(String threeYearFixedInsured) {
        this.threeYearFixedInsured = threeYearFixedInsured;
    }

    public String getFourYearFixedInsured() {
        return this.fourYearFixedInsured;
    }

    public RateConfig fourYearFixedInsured(String fourYearFixedInsured) {
        this.setFourYearFixedInsured(fourYearFixedInsured);
        return this;
    }

    public void setFourYearFixedInsured(String fourYearFixedInsured) {
        this.fourYearFixedInsured = fourYearFixedInsured;
    }

    public String getFiveYearFixedInsured() {
        return this.fiveYearFixedInsured;
    }

    public RateConfig fiveYearFixedInsured(String fiveYearFixedInsured) {
        this.setFiveYearFixedInsured(fiveYearFixedInsured);
        return this;
    }

    public void setFiveYearFixedInsured(String fiveYearFixedInsured) {
        this.fiveYearFixedInsured = fiveYearFixedInsured;
    }

    public String getOneYearFixedInsurable() {
        return this.oneYearFixedInsurable;
    }

    public RateConfig oneYearFixedInsurable(String oneYearFixedInsurable) {
        this.setOneYearFixedInsurable(oneYearFixedInsurable);
        return this;
    }

    public void setOneYearFixedInsurable(String oneYearFixedInsurable) {
        this.oneYearFixedInsurable = oneYearFixedInsurable;
    }

    public String getTwoYearFixedInsurable() {
        return this.twoYearFixedInsurable;
    }

    public RateConfig twoYearFixedInsurable(String twoYearFixedInsurable) {
        this.setTwoYearFixedInsurable(twoYearFixedInsurable);
        return this;
    }

    public void setTwoYearFixedInsurable(String twoYearFixedInsurable) {
        this.twoYearFixedInsurable = twoYearFixedInsurable;
    }

    public String getThreeYearFixedInsurable() {
        return this.threeYearFixedInsurable;
    }

    public RateConfig threeYearFixedInsurable(String threeYearFixedInsurable) {
        this.setThreeYearFixedInsurable(threeYearFixedInsurable);
        return this;
    }

    public void setThreeYearFixedInsurable(String threeYearFixedInsurable) {
        this.threeYearFixedInsurable = threeYearFixedInsurable;
    }

    public String getFourYearFixedInsurable() {
        return this.fourYearFixedInsurable;
    }

    public RateConfig fourYearFixedInsurable(String fourYearFixedInsurable) {
        this.setFourYearFixedInsurable(fourYearFixedInsurable);
        return this;
    }

    public void setFourYearFixedInsurable(String fourYearFixedInsurable) {
        this.fourYearFixedInsurable = fourYearFixedInsurable;
    }

    public String getFiveYearFixedInsurable() {
        return this.fiveYearFixedInsurable;
    }

    public RateConfig fiveYearFixedInsurable(String fiveYearFixedInsurable) {
        this.setFiveYearFixedInsurable(fiveYearFixedInsurable);
        return this;
    }

    public void setFiveYearFixedInsurable(String fiveYearFixedInsurable) {
        this.fiveYearFixedInsurable = fiveYearFixedInsurable;
    }

    public String getOneYearFixedConventional() {
        return this.oneYearFixedConventional;
    }

    public RateConfig oneYearFixedConventional(String oneYearFixedConventional) {
        this.setOneYearFixedConventional(oneYearFixedConventional);
        return this;
    }

    public void setOneYearFixedConventional(String oneYearFixedConventional) {
        this.oneYearFixedConventional = oneYearFixedConventional;
    }

    public String getTwoYearFixedConventional() {
        return this.twoYearFixedConventional;
    }

    public RateConfig twoYearFixedConventional(String twoYearFixedConventional) {
        this.setTwoYearFixedConventional(twoYearFixedConventional);
        return this;
    }

    public void setTwoYearFixedConventional(String twoYearFixedConventional) {
        this.twoYearFixedConventional = twoYearFixedConventional;
    }

    public String getThreeYearFixedConventional() {
        return this.threeYearFixedConventional;
    }

    public RateConfig threeYearFixedConventional(String threeYearFixedConventional) {
        this.setThreeYearFixedConventional(threeYearFixedConventional);
        return this;
    }

    public void setThreeYearFixedConventional(String threeYearFixedConventional) {
        this.threeYearFixedConventional = threeYearFixedConventional;
    }

    public String getFourYearFixedConventional() {
        return this.fourYearFixedConventional;
    }

    public RateConfig fourYearFixedConventional(String fourYearFixedConventional) {
        this.setFourYearFixedConventional(fourYearFixedConventional);
        return this;
    }

    public void setFourYearFixedConventional(String fourYearFixedConventional) {
        this.fourYearFixedConventional = fourYearFixedConventional;
    }

    public String getFiveYearFixedConventional() {
        return this.fiveYearFixedConventional;
    }

    public RateConfig fiveYearFixedConventional(String fiveYearFixedConventional) {
        this.setFiveYearFixedConventional(fiveYearFixedConventional);
        return this;
    }

    public void setFiveYearFixedConventional(String fiveYearFixedConventional) {
        this.fiveYearFixedConventional = fiveYearFixedConventional;
    }

    public String getFiveYearVariableInsured() {
        return this.fiveYearVariableInsured;
    }

    public RateConfig fiveYearVariableInsured(String fiveYearVariableInsured) {
        this.setFiveYearVariableInsured(fiveYearVariableInsured);
        return this;
    }

    public void setFiveYearVariableInsured(String fiveYearVariableInsured) {
        this.fiveYearVariableInsured = fiveYearVariableInsured;
    }

    public String getFiveYearVariableInsurable() {
        return this.fiveYearVariableInsurable;
    }

    public RateConfig fiveYearVariableInsurable(String fiveYearVariableInsurable) {
        this.setFiveYearVariableInsurable(fiveYearVariableInsurable);
        return this;
    }

    public void setFiveYearVariableInsurable(String fiveYearVariableInsurable) {
        this.fiveYearVariableInsurable = fiveYearVariableInsurable;
    }

    public String getFiveYearVariableConventional() {
        return this.fiveYearVariableConventional;
    }

    public RateConfig fiveYearVariableConventional(String fiveYearVariableConventional) {
        this.setFiveYearVariableConventional(fiveYearVariableConventional);
        return this;
    }

    public void setFiveYearVariableConventional(String fiveYearVariableConventional) {
        this.fiveYearVariableConventional = fiveYearVariableConventional;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof RateConfig)) {
            return false;
        }
        return getId() != null && getId().equals(((RateConfig) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "RateConfig{" +
            "id=" + getId() +
            ", oneYearFixedInsured='" + getOneYearFixedInsured() + "'" +
            ", twoYearFixedInsured='" + getTwoYearFixedInsured() + "'" +
            ", threeYearFixedInsured='" + getThreeYearFixedInsured() + "'" +
            ", fourYearFixedInsured='" + getFourYearFixedInsured() + "'" +
            ", fiveYearFixedInsured='" + getFiveYearFixedInsured() + "'" +
            ", oneYearFixedInsurable='" + getOneYearFixedInsurable() + "'" +
            ", twoYearFixedInsurable='" + getTwoYearFixedInsurable() + "'" +
            ", threeYearFixedInsurable='" + getThreeYearFixedInsurable() + "'" +
            ", fourYearFixedInsurable='" + getFourYearFixedInsurable() + "'" +
            ", fiveYearFixedInsurable='" + getFiveYearFixedInsurable() + "'" +
            ", oneYearFixedConventional='" + getOneYearFixedConventional() + "'" +
            ", twoYearFixedConventional='" + getTwoYearFixedConventional() + "'" +
            ", threeYearFixedConventional='" + getThreeYearFixedConventional() + "'" +
            ", fourYearFixedConventional='" + getFourYearFixedConventional() + "'" +
            ", fiveYearFixedConventional='" + getFiveYearFixedConventional() + "'" +
            ", fiveYearVariableInsured='" + getFiveYearVariableInsured() + "'" +
            ", fiveYearVariableInsurable='" + getFiveYearVariableInsurable() + "'" +
            ", fiveYearVariableConventional='" + getFiveYearVariableConventional() + "'" +
            "}";
    }
}
