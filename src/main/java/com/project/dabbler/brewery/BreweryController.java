package com.project.dabbler.brewery;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/breweries")
public class BreweryController {

    @GetMapping
    public List<Brewery> getAllBreweries() {
        List<Brewery> breweries = Arrays.asList(
                new Brewery(1L,
                        "Bauhaus",
                        "North East Minneapolis",
                        Drink.BEER),
                new Brewery(2L,
                        "Bald Man",
                        "Eagan",
                        Drink.BEER)
        );
        return breweries;
    }
}
