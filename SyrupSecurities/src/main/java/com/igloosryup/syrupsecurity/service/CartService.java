package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.Cart;
import com.igloosryup.syrupsecurity.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    public CartRepository cartRepository;

    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Optional<Cart> getCart(Integer customerId){
        try{
            return Optional.of(cartRepository.findCartByCustomer_Id(customerId));
        }catch (Exception exception) {
            return Optional.empty();
        }
    }
}
