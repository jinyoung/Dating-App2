package dating.app.common;

import dating.app.UserManagementAndAuthenticationApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@CucumberContextConfiguration
@SpringBootTest(classes = { UserManagementAndAuthenticationApplication.class })
public class CucumberSpingConfiguration {}
