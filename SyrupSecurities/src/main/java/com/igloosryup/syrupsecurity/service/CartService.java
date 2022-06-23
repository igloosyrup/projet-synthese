package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.Cart;
import com.igloosryup.syrupsecurity.model.Customer;
import com.igloosryup.syrupsecurity.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Optional;

@Service
public class CartService {

    public CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Optional<Cart> newCart(Customer customer) {
        Cart newCart = new Cart();
        newCart.setCartProductMap(new HashMap<>());
        newCart.setCustomer(customer);
        try {
            return Optional.of(cartRepository.save(newCart));
        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<Cart> saveCart(Cart cart){
        try{
            return Optional.of(cartRepository.save(cart));
        }catch (Exception exception){
            return Optional.empty();
        }
    }

    public Optional<Cart> getCart(Integer customerId) {
        try {
            return Optional.of(cartRepository.findCartByCustomer_Id(customerId));
        } catch (Exception exception) {
            return Optional.empty();
        }
    }
}
