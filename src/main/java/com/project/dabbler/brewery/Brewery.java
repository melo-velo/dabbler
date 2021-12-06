package com.project.dabbler.brewery;

import lombok.*;

import java.net.URL;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
//@AllArgsConstructor

public class Brewery {
    private Long id;
    // Name of Brewery
    private String name;
    //Where the brewery is located
    private String location;
    //What type of drink it is
    private Drink drink;
    //What type of beer it is or other for non-alcoholic beverages
    private Type type;
    //Name of favorite beer
    private String title;
    //Beers on tap
    private int numberOfBeers;
    //Website address
    private String url;

    public Brewery(Long id, String name, String location, Drink drink, Type type, String title, int numberOfBeers, String url) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.drink = drink;
        this.type = type;
        this.title = title;
        this.numberOfBeers = numberOfBeers;
        this.url = url;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setDrink(Drink drink) {
        this.drink = drink;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setNumberOfBeers(int numberOfBeers) {
        this.numberOfBeers = numberOfBeers;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public Drink getDrink() {
        return drink;
    }

    public Type getType() {
        return type;
    }

    public String getTitle() {
        return title;
    }

    public int getNumberOfBeers() {
        return numberOfBeers;
    }

    public String getUrl() {
        return url;
    }
}
