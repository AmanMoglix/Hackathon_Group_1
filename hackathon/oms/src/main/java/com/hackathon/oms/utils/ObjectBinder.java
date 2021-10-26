package com.hackathon.oms.utils;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hackathon.oms.domain.Order;
import com.hackathon.oms.domain.OrderMain;
import com.hackathon.oms.model.dto.OrderDTO;
import com.hackathon.oms.model.dto.OrderMainDTO;

@Component
public class ObjectBinder {
	
	@Autowired
	private ModelMapper modelMapper;

	public OrderMainDTO bindOrdermain(OrderMain ordermain) {
		if (ordermain != null)
			return modelMapper.map(ordermain, OrderMainDTO.class);

		return null;
	}

	public List<OrderMainDTO> bindOrdermain(List<OrderMain> ordermain) {
		if (ordermain == null) {
			return new ArrayList<OrderMainDTO>();
		}
		List<OrderMainDTO> orderDTOs = new ArrayList<OrderMainDTO>();
		ordermain.forEach(it -> {
			if (it != null)
				orderDTOs.add(bindOrdermain(it));
		});

		return orderDTOs;
	}

	public OrderDTO bindOrder(Order order) {
		if (order != null)
			return modelMapper.map(order, OrderDTO.class);

		return null;
	}
	
	public List<OrderDTO> bindOrders(List<Order> order){
		if(order==null)
			return new ArrayList<OrderDTO>();
		List<OrderDTO> orderDTOs=new ArrayList<OrderDTO>();
		order.forEach(it->{
			orderDTOs.add(bindOrder(it));
		});
		return orderDTOs;
		
	}
}
