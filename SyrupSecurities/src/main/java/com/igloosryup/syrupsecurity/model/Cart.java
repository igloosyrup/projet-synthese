package com.igloosryup.syrupsecurity.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Map;

@Data
@Entity
public class Cart {

    @Id
    private Integer id;
    @OneToMany
    private Map<Integer, CartProduct> cartProductMap;
    @OneToOne
    private Customer customer;
}
