package dating.app.common;

import dating.app.LocationBasedServiceManagementApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { LocationBasedServiceManagementApplication.class })
public class CucumberSpingConfiguration {}
