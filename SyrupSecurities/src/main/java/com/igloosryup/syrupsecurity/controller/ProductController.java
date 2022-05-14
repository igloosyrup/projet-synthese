package com.igloosryup.syrupsecurity.controller;

import com.igloosryup.syrupsecurity.model.Product;
import com.igloosryup.syrupsecurity.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5520")
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/register")
    public ResponseEntity<Product> registerProduct(@RequestBody Product product){
        return productService.saveProduct(product)
                .map(product1 -> ResponseEntity.status(HttpStatus.CREATED).body(product1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        System.out.println(product);
        return productService.saveProduct(product)
                .map(product1 -> ResponseEntity.status(HttpStatus.CREATED).body(product1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Product>> fetchAllProducts(){
        return productService.getAllProducts()
                .map(product1 -> ResponseEntity.status(HttpStatus.CREATED).body(product1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/get/{productID}")
    public ResponseEntity<Product> fetchProduct(@PathVariable Integer productID){
        return productService.getProduct(productID)
                .map(product1 -> ResponseEntity.status(HttpStatus.CREATED).body(product1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @DeleteMapping("/delete/{productID}")
    public ResponseEntity<Boolean> deleteCustomer(@PathVariable Integer productID){
        return productService.deleteProduct(productID)
                .map(product1 -> ResponseEntity.status(HttpStatus.OK).body(product1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).body(false));
    }

}
