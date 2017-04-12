package com.quintonshabangu.services;

import com.quintonshabangu.domain.Country;
import com.quintonshabangu.persistance.CountryRepository;
import com.quintonshabangu.persistance.JPAConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Component;

@Configuration
@ComponentScan(
        basePackages = "com.quintonshabangu.services",
        includeFilters = @ComponentScan.Filter(Component.class)
)
@Import({JPAConfig.class})
public class ServiceConfiguration {
    CountryRepository countryRepository;
    @Bean
    public Service service(CountryRepository countryRepository) {
        return new Service("Hello World", countryRepository);
    }


}
