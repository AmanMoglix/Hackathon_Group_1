package com.hackathon.online.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.online.domain.Cart;

@Repository
public interface CartReposioty extends JpaRepository<Cart, Long> {
	@Query(value = "select c from com.hackathon.online.domain.Cart c where c.productId = :productId and c.userId = :userId")
	public Cart findbyProductIdAndSupplierId(Long productId, Long userId);

	public List<Cart> findByUserId(Long valueOf);

}
