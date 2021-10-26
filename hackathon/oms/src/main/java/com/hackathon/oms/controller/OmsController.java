package com.hackathon.oms.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.oms.domain.OrderMain;
import com.hackathon.oms.model.dto.OrderMainDTO;
import com.hackathon.oms.service.OmsService;

@RestController
@RequestMapping(value="/oms")
public class OmsController {
	private static Logger logger = LoggerFactory.getLogger(OmsController.class);

	@Autowired
	private OmsService omsService;

	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public OrderMain save(@RequestBody OrderMain orderMain, @RequestHeader("X_AUTHORITY") String authority,
			@RequestHeader("X_USER_ID") String userId, @RequestHeader("X_USERNAME") String username,
			@RequestHeader("X_LOCATION") String location) {

		com.hackathon.oms.model.CurrentUser currentUser = com.hackathon.oms.model.CurrentUser.getInstance(userId,
				username, authority, location);

		return this.omsService.saveOrUpdate(orderMain, currentUser);
	}
	@RequestMapping(value = "", method = RequestMethod.GET, consumes = "application/json", produces = "application/json")
	public List<OrderMainDTO> list( @RequestHeader("X_AUTHORITY") String authority,
			@RequestHeader("X_USER_ID") String userId, @RequestHeader("X_USERNAME") String username,
			@RequestHeader("X_LOCATION") String location) {

		com.hackathon.oms.model.CurrentUser currentUser = com.hackathon.oms.model.CurrentUser.getInstance(userId,
				username, authority, location);
logger.info("***********"+currentUser.getUserId());
		return this.omsService.findByUserId(currentUser);
	}
	@RequestMapping(value = "/list", method = RequestMethod.GET, consumes = "application/json", produces = "application/json")
	public List<OrderMainDTO> Orderlist( @RequestHeader("X_AUTHORITY") String authority,
			@RequestHeader("X_USER_ID") String userId, @RequestHeader("X_USERNAME") String username,
			@RequestHeader("X_LOCATION") String location) {

		com.hackathon.oms.model.CurrentUser currentUser = com.hackathon.oms.model.CurrentUser.getInstance(userId,
				username, authority, location);
logger.info("***********"+currentUser.getUserId());
		return this.omsService.list(currentUser);
	}
	@RequestMapping(value = "/pending", method = RequestMethod.GET, consumes = "application/json", produces = "application/json")
	public List<OrderMainDTO> PendingOrderlist( @RequestHeader("X_AUTHORITY") String authority,
			@RequestHeader("X_USER_ID") String userId, @RequestHeader("X_USERNAME") String username,
			@RequestHeader("X_LOCATION") String location) {

		com.hackathon.oms.model.CurrentUser currentUser = com.hackathon.oms.model.CurrentUser.getInstance(userId,
				username, authority, location);
logger.info("***********"+currentUser.getUserId());
		return this.omsService.orderByStatus(1L,currentUser);
	}
}
