package com.example.ws.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity // db'ye User sınıfından bir table göndermek için
@Table(name = "users") // table adı User olarak kabul edilmediği için eklendi
public class User {
    @Id
    @GeneratedValue
    long id; // table için unique bir id gerektiği için eklendi
    String username;
    String email;
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
