package com.quintonshabangu.services.DTOs;

/**
 * Created by quinton.shabangu on 2017/04/06.
 */
public class PersonDTO {
    private long Id;
    private String name;
    private String surname;
    private long countryId;
    private String countryName;

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

    public long getCountryId() {
        return countryId;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public void setCountryId(long countryId) {
        this.countryId = countryId;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }
}
