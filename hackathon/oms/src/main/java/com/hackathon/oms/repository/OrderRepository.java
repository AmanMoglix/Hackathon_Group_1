package com.hackathon.oms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.oms.domain.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
	public Order findByUserId(Long userId);
}
