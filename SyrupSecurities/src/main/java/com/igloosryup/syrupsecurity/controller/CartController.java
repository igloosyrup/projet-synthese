package com.igloosryup.syrupsecurity.controller;

import com.igloosryup.syrupsecurity.model.Cart;
import com.igloosryup.syrupsecurity.model.Customer;
import com.igloosryup.syrupsecurity.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5520")
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/new")
    public ResponseEntity<Cart> registerNewCart(@RequestBody Customer customer){
        System.out.println(customer);
        return cartService.newCart(customer)
                .map(cart -> ResponseEntity.status(HttpStatus.CREATED).body(cart))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/{customerID}")
    public ResponseEntity<Cart> getCart(@PathVariable Integer customerID){
        return cartService.getCart(customerID)
                .map(cart -> ResponseEntity.status(HttpStatus.OK).body(cart))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }


    @PutMapping("/update")
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart){
        return cartService.saveCart(cart)
                .map(cart1 -> ResponseEntity.status(HttpStatus.OK).body(cart1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
