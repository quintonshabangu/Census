package com.quintonshabangu.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
/**
 * Created by quinton.shabangu on 2017/04/05.
 */
@Entity
public class Person extends IdentifiableEntity implements Serializable {

    @Column(name= "NAME", nullable = false)
    private String name;

    @Column(name="SURNAME", nullable = false)
    private String surname;

    @ManyToOne(targetEntity = Country.class, fetch = FetchType.EAGER)
    @JoinColumn( name = "CountryId")
    private Country country;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    //Relationships
    public Country getCountry() {
        return this.country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }
}
