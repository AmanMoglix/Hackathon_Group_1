package com.hackathon.online.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;
@Data
@Component
public class ApplicationConfig {
	@Value("${hackathon.moglix.catalog.serviceId}")
	private String catalogServiceId;
	
	@Value("${hackathon.moglix.inventory.serviceId}")
	private String inventoryServiceId;
}
