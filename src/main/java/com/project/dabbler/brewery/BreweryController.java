package com.project.dabbler.brewery;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class BreweryController {

    private final BreweryService breweryService;

    public BreweryController(BreweryService breweryService) {
        this.breweryService = breweryService;
    }

    @RequestMapping("api/v1/breweries")
    public List<Brewery> getAllBreweries() {
        return breweryService.getAllBreweries();
    }

    @RequestMapping("api/v1/breweries/{id}")
    public Brewery getBrewery(@PathVariable Long id) {
        return breweryService.getBrewery(id);
    }

    @RequestMapping(method=RequestMethod.POST, value="api/v1/breweries")
    public void createBrewery(@RequestBody Brewery brewery) {
        breweryService.createBrewery(brewery);
    }

}
