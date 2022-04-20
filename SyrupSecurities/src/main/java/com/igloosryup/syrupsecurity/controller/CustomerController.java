package com.igloosryup.syrupsecurity.controller;

import com.igloosryup.syrupsecurity.model.Customer;
import com.igloosryup.syrupsecurity.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "https://localhost:5520")
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<Customer> registerCustomer(@RequestBody Customer customer){
        return customerService.registerCustomer(customer)
                .map(customer1 -> ResponseEntity.status(HttpStatus.CREATED).body(customer1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/{email}/{pwd}")
    public ResponseEntity<Customer> loginCustomer(@PathVariable String email, @PathVariable String pwd){
        return customerService.loginCustomer(email, pwd)
                .map(customer1 -> ResponseEntity.status(HttpStatus.OK).body(customer1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).body(new Customer()));
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Customer>> fetchAllCustomer(){
        return customerService.getAllCustomers()
                .map(customers -> ResponseEntity.status(HttpStatus.OK).body(customers))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

//    @GetMapping("")
}
