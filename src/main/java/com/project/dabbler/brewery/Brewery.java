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

}
