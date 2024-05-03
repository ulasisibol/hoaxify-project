package com.example.ws.user;

import com.example.ws.user.validation.UniqueEmail;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity // db'ye User sınıfından bir table göndermek için
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = { "email" })) // table adı User olarak kabul
                                                                                         // edilmediği için eklendi
public class User {
    @Id
    @GeneratedValue
    long id; // table için unique bir id gerektiği için eklendi

    @NotBlank(message = "{hoaxify.constraints.notblank.message}")
    @Size(min = 6, max = 12, message = "{hoaxify.constraints.username.size}")
    String username;

    @NotBlank(message = "{hoaxify.constraints.notblank.email.message}")
    @Email(message = "{hoaxify.constraints.email.notLikeEmail}")
    @UniqueEmail
    String email;

    @Size(min = 6, max = 255, message = "{hoaxify.constraints.password.size}")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{hoaxify.constraints.password.pattern}")
    String password;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
