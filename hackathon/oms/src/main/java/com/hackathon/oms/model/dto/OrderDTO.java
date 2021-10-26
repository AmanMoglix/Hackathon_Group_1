package com.hackathon.oms.model.dto;

import com.hackathon.oms.model.discovery.ProductDiscoveryDTO;
import com.hackathon.oms.model.discovery.UserDiscoveryDTO;

import lombok.Data;
@Data
public class OrderDTO {
	private Long id;
	private Long userId;
	private Long productId;
	private Integer productQuantity;
	private Double totalPrice;
	private Double grandTotal;
	private Long orderMainId;
	private ProductDiscoveryDTO product;
	private UserDiscoveryDTO user;
}
