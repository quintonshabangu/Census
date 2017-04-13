package com.quintonshabangu.app;

import com.quintonshabangu.services.Service;
import com.quintonshabangu.services.ServiceConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Import(ServiceConfiguration.class)
@RestController
public class Application {

    private final Service service;
    @Autowired
    public Application(Service service) {
        this.service = service;
        this.service.createCountries();
    }

    @Value("${mysql.dbserver}")
    private static String dd;
    @GetMapping("/")
    public String home() {
        return service.message();
    }

    public static void main(String[] args) {
        System.out.println(dd);
        SpringApplication.run(Application.class, args);
    }

}
