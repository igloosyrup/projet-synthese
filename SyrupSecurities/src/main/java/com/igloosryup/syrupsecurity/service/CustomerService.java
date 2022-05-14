package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.Customer;
import com.igloosryup.syrupsecurity.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    public CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Optional<Customer> registerCustomer(Customer customer) {
        try {
            //TODO validate customer infos
            System.out.println(customer);
            return Optional.of(customerRepository.save(customer));
        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<Customer> loginCustomer(String email, String pwd) {
        try {
            Customer customer = customerRepository.findCustomerByEmailIgnoreCase(email);
            return customer.getPwd().equals(pwd) ? Optional.of(customer) : Optional.empty();
        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<Customer> getCustomer(Integer customerID) {
        try {
            return customerRepository.findById(customerID);

        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<List<Customer>> getAllCustomers() {
        try {
            return Optional.of(customerRepository.findAll());
        } catch (Exception exception) {
            return Optional.empty();
        }
    }

    public Optional<Boolean> deleteCustomer(Integer customerID) {
        try {
            customerRepository.deleteById(customerID);
            return Optional.of(customerRepository.findById(customerID).isEmpty());
        } catch (Exception exception) {
            return Optional.empty();
        }
    }
}
