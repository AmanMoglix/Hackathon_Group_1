package com.hackathon.inventory.service;

import com.hackathon.inventory.model.CurrentUser;
import com.hackathon.inventory.model.dto.discovery.CatalogDiscoveryDTO;
import com.hackathon.inventory.model.dto.discovery.SupplierDiscoveryDTO;

public interface DiscoveryService {
	public CatalogDiscoveryDTO fetchByProductId(Long productId, CurrentUser currentUser);

	public SupplierDiscoveryDTO fetchBySupplierId(Long supplierId, CurrentUser currentUser);
}
