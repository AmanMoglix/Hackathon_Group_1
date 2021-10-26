package com.hackathon.online.model.dto.discovery;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.Data;
@Data
public class OnlineProductListingDTO {
	private Long productId;
	private Double productPrice;
	private Long supplierId;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private ProductDiscoveryDTO catalog;
	
	
}
