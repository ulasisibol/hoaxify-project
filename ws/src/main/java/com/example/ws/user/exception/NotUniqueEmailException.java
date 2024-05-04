package com.example.ws.user.exception;

import java.util.Collections;
import java.util.Map;

import org.springframework.context.i18n.LocaleContextHolder;

import com.example.ws.shared.Messages;

public class NotUniqueEmailException extends RuntimeException {
    public NotUniqueEmailException() {
        super(Messages.getMessageForLocale("hoaxify.error.validation",
                LocaleContextHolder.getLocale()));
    }

    public Map<String, String> getValidationError() {
        return (Map<String, String>) Collections.singletonMap("email",
                Messages.getMessageForLocale("hoaxify.constraints.email.notUnique",
                        LocaleContextHolder.getLocale()));
    }
}
