package com.hackathon.online.service;

import java.util.List;

import com.hackathon.online.model.CurrentUser;
import com.hackathon.online.model.dto.discovery.OnlineProductListingDTO;
import com.hackathon.online.model.dto.discovery.ProductDiscoveryDTO;

public interface DiscoveryService {
	public List<OnlineProductListingDTO> fetchProductForList(CurrentUser currentUser);

	public ProductDiscoveryDTO fetchProductByProductId(Long productId, CurrentUser currentUser);
}
