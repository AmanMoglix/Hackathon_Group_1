package com.hackathon.inventory.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hackathon.inventory.domain.TransactionHead;
import com.hackathon.inventory.model.dto.OnlineProductListingDTO;
@Repository
public interface TransactionHeadRepository extends JpaRepository<TransactionHead,Long>{
	@Query(value="select new com.hackathon.inventory.model.dto.OnlineProductListingDTO (d.productId, "
			+ " d.productPrice , h.supplierId ) "
			+ " from com.hackathon.inventory.domain.TransactionHead h "
			+ " left join com.hackathon.inventory.domain.TransactionDetails d"
			+ " on h.id = d.transactionHeadId "
			+ " order by d.productPrice")
List<OnlineProductListingDTO> productListbyProductPrice();
}
