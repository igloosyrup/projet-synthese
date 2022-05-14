package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
public class Customer extends User{

    @Column(nullable = false)
    private String firstname;
    @Column(nullable = false)
    private String lastname;
    @Column(unique = true, nullable = false, length = 50)
    private String email;
    @Column(unique = true, nullable = false, length = 20)
    private String phoneNbr;
    @Column(nullable = false)
    private String strAddr;
    private String aptNumber;
    @Column(nullable = false)
    private String postalCode;
    @Column(nullable = false)
    private String country;
    @Column(nullable = false)
    private String city;


}
