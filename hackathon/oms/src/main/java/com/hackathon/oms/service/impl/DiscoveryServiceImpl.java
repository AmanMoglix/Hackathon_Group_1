package com.hackathon.oms.service.impl;

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
import com.hackathon.oms.config.ApplicationConfig;
import com.hackathon.oms.model.CurrentUser;
import com.hackathon.oms.model.discovery.ProductDiscoveryDTO;
import com.hackathon.oms.model.discovery.UserDiscoveryDTO;
import com.hackathon.oms.service.DiscoveryService;
import com.hackathon.oms.utils.exception.DiscoveryRequestException;
@Service
public class DiscoveryServiceImpl implements DiscoveryService {
	private static final Logger logger = LoggerFactory.getLogger(DiscoveryServiceImpl.class);

	@Autowired
	private ApplicationConfig config;
	@Autowired
	private RestTemplate restTemplate;
	@Autowired
	private LoadBalancerClient loadBalancerClient;

	private ServiceInstance getServiceInstance(String serviceId) {
		ServiceInstance serviceInstance = loadBalancerClient.choose(serviceId);
		if (serviceInstance == null)
			throw new com.hackathon.oms.utils.exception.DiscoveryServiceException("Service Unavailable '{" + serviceId
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
			headers.set("X_LOCATION", "L-DefaultLocation");
		}
		return headers;
	}

	@Override
	public ProductDiscoveryDTO fetchProductByProdutId(Long productId, CurrentUser currentUser) {
		logger.info("Going to fetch product by productId : '{}'", productId);
		try {
			String PATH = "/catalog/" + productId;
			String url = getServiceInstance(this.config.getCatalogServiceId()).getUri() + PATH;
			HttpHeaders headers = getHeaders(false, currentUser);
			logger.info("Requesting to fetch product by productId");
			logger.info("Request URL for Product by productId :{}", url);
			logger.info("Request Headers for Product by productId:{}", new Gson().toJson(headers));
			ResponseEntity<ProductDiscoveryDTO> responseEntity = this.restTemplate.exchange(url, HttpMethod.GET,
					new HttpEntity<>(headers), new ParameterizedTypeReference<ProductDiscoveryDTO>() {
					});
			int httpStatus = responseEntity.getStatusCodeValue();
			logger.info("Fetch Product by productId request is processed with service HTTP code {}", httpStatus);
			if (httpStatus == HttpStatus.OK.value()) {
				ProductDiscoveryDTO response = responseEntity.getBody();
				return response == null ? new ProductDiscoveryDTO() : response;
			}
		} catch (HttpClientErrorException.BadRequest | HttpClientErrorException.Conflict
				| HttpClientErrorException.NotFound exception) {
			exception.printStackTrace();
			throw new DiscoveryRequestException("Catalog Service error during request of fetching poduct by productId.");
		}
		return new ProductDiscoveryDTO();

	}

	@Override
	public UserDiscoveryDTO fetchCustomerByCusomerId(Long customerId, CurrentUser currentUser) {
		logger.info("Going to fetch customer by customerId: '{}'",customerId);
		try {
			String PATH="/api/"+customerId;
			String url=getServiceInstance(this.config.getAuthServiceId()).getUri()+PATH;
			HttpHeaders headers=getHeaders(false, currentUser);
			logger.info("Request to fecth User by userId: '{}'",customerId);
			logger.info("Request Url for User by userId: '{}'",url);
			logger.info("Request Headers for Product by productId:{}", new Gson().toJson(headers));
			ResponseEntity<UserDiscoveryDTO> responseEntity=this.restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(headers),
					new ParameterizedTypeReference<UserDiscoveryDTO>() {
					});
			int httpStatus =responseEntity.getStatusCodeValue();
			if (httpStatus == HttpStatus.OK.value()) {
				UserDiscoveryDTO response = responseEntity.getBody();
				return response == null ? new UserDiscoveryDTO() : response;
			}
		}catch (HttpClientErrorException.BadRequest | HttpClientErrorException.Conflict
				| HttpClientErrorException.NotFound exception) {
			exception.printStackTrace();
			throw new DiscoveryRequestException("Auth Service error during request of fetching poduct by productId.");
		}
		return new UserDiscoveryDTO();
	}

}
