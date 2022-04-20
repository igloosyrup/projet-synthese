package com.igloosryup.syrupsecurity.repository;

import com.igloosryup.syrupsecurity.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    Customer findCustomerByEmailIgnoreCase(String email);
}
