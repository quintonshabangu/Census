package com.quintonshabangu.services;

import org.springframework.stereotype.Component;

@Component
public class Service {

    private final String message;

    public Service(String message) {
        this.message = "Hello World";
    }

    public String message() {
        return this.message;
    }
}
