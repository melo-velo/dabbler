package com.project.dabbler.brewery;

import lombok.*;

import java.net.URL;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor

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
}
