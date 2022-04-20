package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@Entity
public class CartProduct {

    @Id
    private Integer id;
    @OneToOne
    private Product product;
    @Column(nullable = false)
    private int quantity;
}
