package com.quintonshabangu.services;

import com.quintonshabangu.domain.Country;
import com.quintonshabangu.persistance.CountryRepository;
import org.springframework.stereotype.Component;

@Component
public class Service {

    private final String message;
    private final CountryRepository countryRepository;
    public Service(String message, CountryRepository countryRepository) {
        this.message = "Hello World";
        this.countryRepository = countryRepository;
    }

    public String message() {
        return this.message;
    }

    public void createCountries() {
        long count = countryRepository.count();
        if (count == 0) {
            createCountry("South Africa");
            createCountry("Mozambique");
            createCountry("Mexico");
            createCountry("Nigeria");
        }
    }

    private void createCountry(String name){
        Country country = new Country();
        country.setName(name);
        countryRepository.save(country);
    }
}
