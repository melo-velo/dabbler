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
    private String name;
    private String location;
    private Drink drink;
    private Type type;
    private String title;
    private int price;
    private String url;

}
