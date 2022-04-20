package com.igloosryup.syrupsecurity.repository;

import com.igloosryup.syrupsecurity.model.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartProductRepository extends JpaRepository<CartProduct, Integer> {


}
