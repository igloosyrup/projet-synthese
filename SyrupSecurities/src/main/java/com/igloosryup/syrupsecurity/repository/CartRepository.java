package com.igloosryup.syrupsecurity.repository;

import com.igloosryup.syrupsecurity.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

    Cart findCartByCustomer_Id(Integer customerID);

}
