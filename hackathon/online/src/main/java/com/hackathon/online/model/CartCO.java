package com.hackathon.online.model;

import lombok.Data;

@Data
public class CartCO {
	private Long id;
	private Long userId;
	private Long stockId;
	private Long productId;
	private Integer productQuantity;
	private Double totalPrice;
}
