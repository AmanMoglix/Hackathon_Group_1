package com.hackathon.oms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.oms.domain.OrderMain;
@Repository
public interface OrderMainRepository extends JpaRepository<OrderMain,Long>{
	
public List<OrderMain> findBySupplierId(Long supplierId);

//@Query(value="SELECT new com.hackathon.oms.domain.OrderMain(m.id,m.status,m.orders )"
//		+ " FROM com.hackathon.oms.domain.OrderMain m "
//		+ " INNER JOIN com.hackathon.oms.domain.Order o"
//		+ " ON m.id = o.orderMainId "
//		+ " WHERE o.supplierId = :Id ")
//public List<OrderMain> findCustom(Long Id);
}
