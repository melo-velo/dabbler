package com.project.dabbler.brewery;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class BreweryService {

    private List<Brewery> breweries = new ArrayList<>(
            Arrays.asList(
                    new Brewery(1L,
                            "Bald Man",
                            "Eagan",
                            Drink.BEER,
                            Type.HAZY,
                            "Tupelo Honey",
                            5,
                            "https://www.baldmanbrewing.com/"),
                    new Brewery(2L,
                            "Bauhaus",
                            "Northeast Minneapolis",
                            Drink.BEER,
                            Type.PILSNER,
                            "Wonderstuff",
                            5,
                            "https://www.bauhausbrewlabs.com/"),
                    new Brewery(3L,
                            "Dangerous Man",
                            "Northeast Minneapolis",
                            Drink.BEER,
                            Type.PORTER,
                            "Peanut Butter Porter",
                            10,
                            "https://dangerousmanbrewing.com/"),
                    new Brewery(4L,
                            "Modist Brewing Co.",
                            "Northloop Minneapolis",
                            Drink.BEER,
                            Type.IPA,
                            "DDH Strata Crystals",
                            17,
                            "https://modistbrewing.com/"),
                    new Brewery(5L,
                            "Inbound Brewing Co.",
                            "Northloop Minneapolis",
                            Drink.BEER,
                            Type.KOLSCH,
                            "Laser Loon",
                            15,
                            "https://inboundbrew.co")
                    )

            );

    public List<Brewery> getAllBreweries() {
        return breweries;
    }

    public Brewery getBrewery(Long id) {
        return breweries.stream().filter(t -> t.getId().equals(id)).findFirst().get();
    }

    public void createBrewery(Brewery brewery) {
        breweries.add(brewery);
    }

}
