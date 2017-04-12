package com.quintonshabangu.services;

import com.quintonshabangu.domain.Country;
import com.quintonshabangu.domain.Person;
import com.quintonshabangu.persistance.CountryRepository;
import com.quintonshabangu.persistance.UserRepository;
import com.quintonshabangu.services.DTOs.CountryDTO;
import com.quintonshabangu.services.DTOs.PersonDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

/**
 * Created by quinton.shabangu on 2017/04/06.
 */
@Component
public class PersonService {

    private UserRepository userRepository;
    private CountryRepository countryRepository;

    @Autowired
    public PersonService(UserRepository userRepository, CountryRepository countryRepository ) {
        this.userRepository = userRepository;
        this.countryRepository = countryRepository;
    }

    public boolean Login(String username, String password){
        return true;
    }

    public boolean Register(PersonDTO personDTO) {
        Person person = new Person();
        person.setName(personDTO.getName());
        person.setSurname(personDTO.getSurname());

        Country country = countryRepository.findOne(personDTO.getCountryId());

        if (country != null)
            person.setCountry(country);

        if (userRepository.save(person) != null)
            return true;
        return false;
    }

    public List<PersonDTO> GetPersons() {
        List usersDtos = new ArrayList<PersonDTO>();

        for (Person person : userRepository.findAll()) {
            usersDtos.add(Mapper.mapToDTO(person));
        }

        return  usersDtos;
    }

    public PersonDTO getPerson(long userId) {
        Person person = userRepository.findOne(userId);
        PersonDTO newPersonDTO = new PersonDTO();

        if (person != null) {
            return Mapper.mapToDTO(person);
        }

        return newPersonDTO;
    }

    public int editUser(long userId, PersonDTO personDTO){
        Person person = userRepository.findOne(userId);

        if (person == null)
            return 404;

        if (userRepository.save(Mapper.mapToDomain(personDTO, person, countryRepository.findOne(personDTO.getCountryId()))) == null)
            return 500;

        return 200;
    }

    public List<CountryDTO> getCountries() {
        List countries = new ArrayList<CountryDTO>();

        for (Country country: countryRepository.findAll()) {
            countries.add(Mapper.mapToDTO(country));
        }

        return countries;
    }
}
