package com.quintonshabangu.app.Controllers;

import com.quintonshabangu.services.PersonService;
import com.quintonshabangu.services.DTOs.CountryDTO;
import com.quintonshabangu.services.DTOs.PersonDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by quinton.shabangu on 2017/04/06.
 */
@RestController
@RequestMapping("/api/person")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("")
    public int RegisterUser(@RequestBody PersonDTO personDTO) {
        if (personService.Register(personDTO))
            return 200;

        return 500;
    }

    @PutMapping("/{personId}")
    public int EditUser(@RequestBody PersonDTO personDTO, @PathVariable("personId") long personId) {
        return personService.editUser(personId, personDTO);
    }

    @GetMapping("")
    public @ResponseBody List<PersonDTO> GetPersons(){
        return personService.GetPersons();
    }

    @GetMapping("/{personId}")
    public @ResponseBody
    PersonDTO GetUser(@PathVariable("personId") long personId){
        return personService.getPerson(personId);
    }

    @GetMapping("/countries")
    public @ResponseBody List<CountryDTO> GetCountries() {
        return personService.getCountries();
    }
}
