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
                "Dabbler Brewing Co.",
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

    @Test
    //test uses real data instead of mock data
    void checkIfNameReturnsCorrect() {
        //Given
        var underTest = myTestBrewery.getBrewery(1L);

        var testName = underTest.getName();

        //When id is equivalent to 1, convert to string.
        val testValue = testName;

        //Then check to see if test value is correct.
        assertThat(testValue).isEqualTo("Bald Man");
    }

    @Test
        //test switches params and checks if location correct
    void checkIfLocationCorrect() {
        //Given
        var underTest = myTestBrewery.getBrewery(3L);

        var location = underTest.getLocation();

        //When id is equivalent to 1, convert to string.
        val testValue = location;

        //Then check to see if test value is correct.
        assertThat(testValue).isEqualTo("Northeast Minneapolis");
    }

    @Test
        //test switches params and checks if drink type correct, tests enums
    void checkIfTypeCorrect() {
        //Given
        var underTest = myTestBrewery.getBrewery(3L);

        var drink = underTest.getDrink();

        //When id is equivalent to 1, convert to string.
        val testValue = drink;

        //Then check to see if test value is correct.
        assertThat(testValue).isEqualTo(Drink.BEER);
    }

    @Test
        //test switches params and checks if drink type correct, tests enums
    void checkIfTitleCorrect() {
        //Given
        var underTest = myTestBrewery.getBrewery(10L);

        var title = underTest.getTitle();

        //When id is equivalent to 1, convert to string.
        val testValue = title;

        //Then check to see if test value is correct.
        assertThat(testValue).isEqualTo("Rain Drops");
    }

}
