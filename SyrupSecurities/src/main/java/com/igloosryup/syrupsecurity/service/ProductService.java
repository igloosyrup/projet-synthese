package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.Product;
import com.igloosryup.syrupsecurity.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    public ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Optional<Product> getProduct(Integer productId){
        try {
            return Optional.of(productRepository.findProductById(productId));
        }catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<Product> saveProduct(Product product){
        try{
            return Optional.of(productRepository.save(product));
        }catch (Exception exception) {
            return Optional.empty();
        }
    }

}
