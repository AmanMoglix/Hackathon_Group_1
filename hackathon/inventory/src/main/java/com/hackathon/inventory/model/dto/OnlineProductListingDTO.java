package com.hackathon.inventory.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.hackathon.inventory.model.dto.discovery.CatalogDiscoveryDTO;
import com.hackathon.inventory.model.dto.discovery.SupplierDiscoveryDTO;

import lombok.Data;
@Data
public class OnlineProductListingDTO {
	private Long productId;
	private Double productPrice;
	private Long stockId;
	private Long supplierId;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private SupplierDiscoveryDTO supplier;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private CatalogDiscoveryDTO catalog;
	public OnlineProductListingDTO(){}
	public OnlineProductListingDTO(Long productId, Double productPrice, Long supplierId) {
		super();
		this.productId = productId;
		this.productPrice = productPrice;
		this.supplierId = supplierId;
	}
	
}
