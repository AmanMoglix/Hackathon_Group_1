package com.hackathon.online.utils;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hackathon.online.domain.Cart;
import com.hackathon.online.model.dto.CartDTO;

@Component
public class ObjectBinder {
	@Autowired
	private ModelMapper modelMapper;

	public CartDTO bindCart(Cart cart) {
		if (cart == null)
			return null;
		return this.modelMapper.map(cart, CartDTO.class);
	}

	public List<CartDTO> bindCarts(List<Cart> carts) {
		if (carts == null && carts.isEmpty())
			return new ArrayList<CartDTO>();
		List<CartDTO> cartDTOs = new ArrayList<CartDTO>();
		carts.forEach(it -> {
			if (it != null)
				cartDTOs.add(bindCart(it));
		});
		return cartDTOs;
	}
}
