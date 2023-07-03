package dating.app.common;

import dating.app.MatchingAndRecommendationApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { MatchingAndRecommendationApplication.class })
public class CucumberSpingConfiguration {}
