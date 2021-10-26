package com.hackathon.oms.service;

import com.hackathon.oms.model.CurrentUser;
import com.hackathon.oms.model.discovery.ProductDiscoveryDTO;
import com.hackathon.oms.model.discovery.UserDiscoveryDTO;

public interface DiscoveryService {
	public ProductDiscoveryDTO fetchProductByProdutId(Long product, CurrentUser currentUser);

	public UserDiscoveryDTO fetchCustomerByCusomerId(Long customerId, CurrentUser currentUser);
}
