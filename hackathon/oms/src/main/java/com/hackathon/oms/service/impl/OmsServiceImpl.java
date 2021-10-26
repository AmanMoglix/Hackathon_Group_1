package com.hackathon.oms.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.oms.domain.Order;
import com.hackathon.oms.domain.OrderMain;
import com.hackathon.oms.model.CurrentUser;
import com.hackathon.oms.model.discovery.ProductDiscoveryDTO;
import com.hackathon.oms.model.discovery.UserDiscoveryDTO;
import com.hackathon.oms.model.dto.OrderDTO;
import com.hackathon.oms.model.dto.OrderMainDTO;
import com.hackathon.oms.repository.OrderMainRepository;
import com.hackathon.oms.service.DiscoveryService;
import com.hackathon.oms.service.OmsService;
import com.hackathon.oms.utils.ObjectBinder;
@Service
public class OmsServiceImpl implements OmsService {
private static final Logger logger=org.slf4j.LoggerFactory.getLogger(OmsServiceImpl.class);
@Autowired
private OrderMainRepository omsRepository;
@Autowired
private DiscoveryService discoveryService;
@Autowired
private ObjectBinder objectBinder;
	@Override
	public OrderMain saveOrUpdate(OrderMain orderMain, CurrentUser currentUser) {
		Double grandTotal=0.00;
		orderMain.setStatus(2L);
		Long supplierId=orderMain.getOrders().stream().filter(x->x.getSupplierId() !=null).findAny().get().getSupplierId();
		orderMain.setSupplierId(supplierId);
		for (Order order : orderMain.getOrders()) {
			grandTotal+=order.getTotalPrice();
//			order.setUserId(Long.parseLong(currentUser.getUserId()));
		}
		orderMain.getOrders().forEach(it->
		{if(it!=null)
			it.setUserId(Long.parseLong(currentUser.getUserId()));
//		grandTotal=it.getTotalPrice();
		});
		orderMain.setGrandTotal(grandTotal);
		logger.info("Going to persist entity '{}'",orderMain);
		return this.omsRepository.save(orderMain);
	}

	@Override
	public OrderMain getById(Long orderId, CurrentUser currentUser) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<OrderMainDTO> list(CurrentUser currentUser) {
		List<OrderMainDTO> orderMainDTOs=new ArrayList<OrderMainDTO>();
		List<OrderDTO> orderDTOs=new ArrayList<OrderDTO>();
		for(OrderMain orderMain:this.omsRepository.findAll()) {
			List<Order> orderList=orderMain.getOrders();
			for(Order order:orderList) {
				ProductDiscoveryDTO productDiscoveryDTO=this.discoveryService.fetchProductByProdutId(order.getProductId(), currentUser);
				UserDiscoveryDTO userDiscoveryDTO=this.discoveryService.fetchCustomerByCusomerId(order.getUserId(), currentUser);
			  OrderDTO orderDTO=new OrderDTO();
			  orderDTO=this.objectBinder.bindOrder(order);
			  orderDTO.setProduct(productDiscoveryDTO);
			  orderDTO.setUser(userDiscoveryDTO);
			  orderDTOs.add(orderDTO);
			}
			OrderMainDTO orderMainDTO=new OrderMainDTO();
			orderMainDTO=this.objectBinder.bindOrdermain(orderMain);
			orderMainDTO.setOrder(orderDTOs);
			orderMainDTOs.add(orderMainDTO);
		}
		return orderMainDTOs;
	}

	@Override
	public List<OrderMainDTO> orderByStatus(Long status, CurrentUser currentUser) {
		
		List<OrderMainDTO> orderMainDTOs=new ArrayList<OrderMainDTO>();
		List<OrderDTO> orderDTOs=new ArrayList<OrderDTO>();
		for(OrderMain orderMain:this.omsRepository.findAll()) {
			List<Order> orderList=orderMain.getOrders();
			for(Order order:orderList) {
				ProductDiscoveryDTO productDiscoveryDTO=this.discoveryService.fetchProductByProdutId(order.getProductId(), currentUser);
				UserDiscoveryDTO userDiscoveryDTO=this.discoveryService.fetchCustomerByCusomerId(order.getUserId(), currentUser);
			  OrderDTO orderDTO=new OrderDTO();
			  orderDTO=this.objectBinder.bindOrder(order);
			  orderDTO.setProduct(productDiscoveryDTO);
			  orderDTO.setUser(userDiscoveryDTO);
			  orderDTOs.add(orderDTO);
			}
			OrderMainDTO orderMainDTO=new OrderMainDTO();
			orderMainDTO=this.objectBinder.bindOrdermain(orderMain);
			orderMainDTO.setOrder(orderDTOs);
			orderMainDTOs.add(orderMainDTO);
		}
		return orderMainDTOs;
	}

	@Override
	public List<OrderMainDTO> findByUserId(CurrentUser currentUser) {
		List<OrderMain> orders=this.omsRepository.findBySupplierId(Long.valueOf(currentUser.getUserId()));
		//List<OrderMain> orders=this.omsRepository.findCustom(Long.valueOf(currentUser.getUserId()));
		List<OrderMainDTO> orderMainDTOs=new ArrayList<OrderMainDTO>();
		List<OrderDTO> orderDTOs=new ArrayList<OrderDTO>();
		for(OrderMain orderMain:orders) {
			List<Order> orderList=orderMain.getOrders();
			for(Order order:orderList) {
				ProductDiscoveryDTO productDiscoveryDTO=this.discoveryService.fetchProductByProdutId(order.getProductId(), currentUser);
				UserDiscoveryDTO userDiscoveryDTO=this.discoveryService.fetchCustomerByCusomerId(order.getUserId(), currentUser);
			  OrderDTO orderDTO=new OrderDTO();
			  orderDTO=this.objectBinder.bindOrder(order);
			  orderDTO.setProduct(productDiscoveryDTO);
			  orderDTO.setUser(userDiscoveryDTO);
			  orderDTOs.add(orderDTO);
			}
			OrderMainDTO orderMainDTO=new OrderMainDTO();
			orderMainDTO=this.objectBinder.bindOrdermain(orderMain);
			orderMainDTO.setOrder(orderDTOs);
			orderMainDTOs.add(orderMainDTO);
		}
		return orderMainDTOs;
	}

}
