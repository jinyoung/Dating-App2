package dating.app.common;

import dating.app.ChatAndSocialFeaturesApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { ChatAndSocialFeaturesApplication.class })
public class CucumberSpingConfiguration {}
