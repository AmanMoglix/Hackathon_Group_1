package com.hackathon.online.model.dto.discovery;

import lombok.Data;

@Data
public class ProductDiscoveryDTO {
	private Long id;
	private Long categoryId;
	private String productName;
	private String productDescription;
	private String productImage;
}
