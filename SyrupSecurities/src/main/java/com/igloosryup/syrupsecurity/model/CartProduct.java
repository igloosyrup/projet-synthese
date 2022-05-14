package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class CartProduct {

    @Id
    @GeneratedValue
    private Integer id;
    @OneToOne
    private Product product;
    @Column(nullable = false)
    private int quantity;
}
