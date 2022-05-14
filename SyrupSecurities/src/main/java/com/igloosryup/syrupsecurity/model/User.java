package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@Data
@MappedSuperclass
public class User {
    @Id
    @GeneratedValue
    private Integer id;
    @Column(nullable = false)
    private String pwd;
}
