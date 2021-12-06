package com.project.dabbler;

import com.project.dabbler.brewery.Brewery;
import com.project.dabbler.brewery.BreweryService;
import com.project.dabbler.brewery.Drink;
import com.project.dabbler.brewery.Type;
import lombok.val;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
//JUnit test examples, all should pass before committing code to master
class DabblerApplicationTests {

    @Autowired
    private BreweryService myTestBrewery;

    @Test
    //Test checks various parameters to see if controller functions return values
    void checkIfBreweryIdExists() {
        Brewery brewery = new Brewery(1L,
                "Dabbler Brewing Co. ",
                "Minneapolis",
                Drink.BEER,
                Type.PILSNER,
                "Dabbler",
                1,
                "Dabbler.us-east-1.elasticbeanstalk.com");

        //Given
        var underTest = myTestBrewery.getBrewery(1L);

        var testID = underTest.getId();

        //When id is equivalent to 1, convert to string.
        val testValue = testID.toString();

        //Then check to see if test value is correct.
        assertThat(testValue).isEqualTo("1");
    }

}
