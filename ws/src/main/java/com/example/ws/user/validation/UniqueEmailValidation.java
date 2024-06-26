package com.example.ws.user.validation;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.ws.user.User;
import com.example.ws.user.UserRepository;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueEmailValidation implements ConstraintValidator<UniqueEmail, String> {
    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        User InDb = userRepository.findByEmail(value);
        return InDb == null;
    }

}
