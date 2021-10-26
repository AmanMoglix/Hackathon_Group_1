package com.hackathon.online.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.hackathon.online.model.dto.discovery.ProductDiscoveryDTO;

import lombok.Data;
@Data
public class CartDTO {
	private Long id;
	private Long userId;
	private Long inventoryId;
	private Long productId;
	private Integer productQuantity;
	private Double totalPrice;
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private ProductDiscoveryDTO catalog;
}
