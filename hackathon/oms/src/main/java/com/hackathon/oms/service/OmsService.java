package com.hackathon.oms.service;

import java.util.List;

import com.hackathon.oms.domain.OrderMain;
import com.hackathon.oms.model.CurrentUser;
import com.hackathon.oms.model.dto.OrderMainDTO;

public interface OmsService {
	public OrderMain saveOrUpdate(OrderMain orderMain, CurrentUser currentUser);

	public OrderMain getById(Long orderId, CurrentUser currentUser);

	public List<OrderMainDTO> list(CurrentUser currentUser);

	public List<OrderMainDTO> orderByStatus(Long status, CurrentUser currentUser);

	public List<OrderMainDTO> findByUserId(CurrentUser currentUser);
}
