package dating.app.common;

import dating.app.ProfileManagementApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { ProfileManagementApplication.class })
public class CucumberSpingConfiguration {}
