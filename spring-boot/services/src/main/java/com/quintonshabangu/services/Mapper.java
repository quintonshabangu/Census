package com.quintonshabangu.services;

import com.quintonshabangu.domain.Country;
import com.quintonshabangu.domain.Person;
import com.quintonshabangu.services.DTOs.CountryDTO;
import com.quintonshabangu.services.DTOs.PersonDTO;

/**
 * Created by quinton.shabangu on 2017/04/07.
 */
public class Mapper {
    public static PersonDTO mapToDTO(Person person) {
        PersonDTO personDTO = new PersonDTO();

        personDTO.setId(person.getId());
        personDTO.setName(person.getName());
        personDTO.setSurname(person.getSurname());
        personDTO.setCountryId(person.getCountry().getId());
        personDTO.setCountryName(person.getCountry().getName());

        return personDTO;
    }

    public static Person mapToDomain(PersonDTO personDTO, Person person, Country country){
        person.setName(personDTO.getName());
        person.setSurname(personDTO.getSurname());

        if (country != null)
            person.setCountry(country);

        return person;
    }

    public static CountryDTO mapToDTO(Country country){
        CountryDTO countryDTO = new CountryDTO();
        countryDTO.setId(country.getId());
        countryDTO.setName(country.getName());
        return countryDTO;
    }
}
