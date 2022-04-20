package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.CartProduct;
import com.igloosryup.syrupsecurity.repository.CartProductRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartProductService {

    public CartProductRepository cartProductRepository;

    public CartProductService(CartProductRepository cartProductRepository) {
        this.cartProductRepository = cartProductRepository;
    }

    public Optional<CartProduct> saveCartProduct(CartProduct cartProduct){
        try{
            return Optional.of(cartProductRepository.save(cartProduct));
        }catch (Exception exception) {
            return Optional.empty();
        }
    }

}
