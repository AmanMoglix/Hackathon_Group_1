package com.hackathon.online.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;
import com.hackathon.online.config.ApplicationConfig;
import com.hackathon.online.model.CurrentUser;
import com.hackathon.online.model.dto.discovery.OnlineProductListingDTO;
import com.hackathon.online.model.dto.discovery.ProductDiscoveryDTO;
import com.hackathon.online.service.DiscoveryService;
import com.hackathon.online.utils.exceptions.DiscoveryServiceException;

@Service
public class DiscoveryServiceImpl implements DiscoveryService {
	private static final Logger logger = LoggerFactory.getLogger(DiscoveryServiceImpl.class);
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private LoadBalancerClient loadBalancerClient;
	@Autowired
	private ApplicationConfig applicationConfig;

	private ServiceInstance getServiceInstance(String serviceId) {
		ServiceInstance serviceInstance = this.loadBalancerClient.choose(serviceId);
		if (serviceInstance == null)
			throw new DiscoveryServiceException("Service Unavailable '{" + serviceId
					+ "}'. Due to unavailability we can not serve this functionality.");
		return serviceInstance;
	}

	private HttpHeaders getHeaders(boolean isOnlyContentTypeRequired, CurrentUser currentUser) {
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);

		if (!isOnlyContentTypeRequired) {
			headers.set("X_USER_ID", currentUser.getUserId());
			headers.set("X_USERNAME", currentUser.getUsername());
			headers.set("X_AUTHORITY", currentUser.getAuthority().toString());
			headers.set("X_LOCATION", "L-DefualtLocation");
		}
		return headers;
	}

	@Override
	public List<OnlineProductListingDTO> fetchProductForList(CurrentUser currentUser) {
		logger.info("Getting onlineListing product by currentUser: '{}'", currentUser);
		try {
			String PATH = "/inventory/txn/list";
			String url = getServiceInstance(this.applicationConfig.getInventoryServiceId()).getUri() + PATH;
			HttpHeaders headers = getHeaders(false, currentUser);

			logger.info("Requesting to fetch products by currentUSer");
			logger.info("Request URL for Product by currentUser :{}", url);
			logger.info("Request Headers for Product by currentUser:{}", new Gson().toJson(headers));

			ResponseEntity<List<OnlineProductListingDTO>> responseEntity = this.restTemplate.exchange(url,
					HttpMethod.GET, new HttpEntity<>(headers),
					new ParameterizedTypeReference<List<OnlineProductListingDTO>>() {
					});

			int httpStatus = responseEntity.getStatusCodeValue();
			if (httpStatus == HttpStatus.OK.value()) {
				List<OnlineProductListingDTO> response = responseEntity.getBody();
				return response == null ? new ArrayList<>() : response;
			}
		} catch (HttpClientErrorException.BadRequest | HttpClientErrorException.Conflict
				| HttpClientErrorException.NotFound exception) {
			exception.printStackTrace();

			throw new com.hackathon.online.utils.exceptions.DiscoveryRequestException(
					"Inventory Service error during request of fetching product by currentUser.");
		}

		return new ArrayList<>();
	}

	@Override
	public ProductDiscoveryDTO fetchProductByProductId(Long productId, CurrentUser currentUser) {
		logger.info("Going to fetch product by productId :{}", productId);
		try {
			String PATH = "/catalog/"+productId;
			String url = getServiceInstance(this.applicationConfig.getCatalogServiceId()).getUri() + PATH;
			HttpHeaders headers = getHeaders(false, currentUser);

			logger.info("Requesting to fetch product by productId");
			logger.info("Request URL for Product by productId :{}", url);
			logger.info("Request Headers for Product by productId:{}", new Gson().toJson(headers));

			ResponseEntity<ProductDiscoveryDTO> responseEntity = this.restTemplate.exchange(url, HttpMethod.GET,
					new HttpEntity<>(headers), new ParameterizedTypeReference<ProductDiscoveryDTO>() {
					});

			int httpStatus = responseEntity.getStatusCodeValue();
			if (httpStatus == HttpStatus.OK.value()) {
				ProductDiscoveryDTO response = responseEntity.getBody();
				return response == null ? new ProductDiscoveryDTO() : response;
			}
		} catch (HttpClientErrorException.BadRequest | HttpClientErrorException.Conflict
				| HttpClientErrorException.NotFound exception) {
			exception.printStackTrace();

			throw new com.hackathon.online.utils.exceptions.DiscoveryRequestException(
					"Catalog Service error during request of fetching product by productId.");
		}

		return new ProductDiscoveryDTO();
	}

}
