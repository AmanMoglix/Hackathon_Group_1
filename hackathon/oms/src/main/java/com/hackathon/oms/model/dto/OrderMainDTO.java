package com.hackathon.oms.model.dto;

import java.util.List;

import lombok.Data;

@Data
public class OrderMainDTO {
	private Long id;
	private Long status;
	private Double grandTotal;
	private Long supplierId;
	List<OrderDTO> order;
}
