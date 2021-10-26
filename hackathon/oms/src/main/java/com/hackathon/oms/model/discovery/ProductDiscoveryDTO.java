package com.hackathon.oms.model.discovery;

import lombok.Data;
@Data
public class ProductDiscoveryDTO {
	private Long id;
	private Long categoryId;
	private String productName;
	private String productDescription;
	private String productImage;
}
