package com.project.dabbler.brewery;

import lombok.*;

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
    //Name of beer
    private String title;
    //Price of beer
    private int price;
    //Website address
    private String url;

}
