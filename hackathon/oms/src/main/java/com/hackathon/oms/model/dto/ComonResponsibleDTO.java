package com.hackathon.oms.model.dto;

import java.util.List;

import com.hackathon.oms.domain.Order;

import lombok.Data;
@Data
public class ComonResponsibleDTO {
	private Long id;
	private Long status;
	private Double grandTotal;
	private List<Order> orders;
	public ComonResponsibleDTO(){}
	
	
}
