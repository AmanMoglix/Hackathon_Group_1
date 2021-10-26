package com.hackathon.oms.domain;

import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
@Data
@Entity
@Table(name="order_main")
public class OrderMain {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long status;
	private Double grandTotal;
	private Long supplierId;
	
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	@JoinColumn(name="order_main_id")
	private List<Order> orders;

	public OrderMain(Long id, Long status, Double grandTotal, Collection<Order> orders) {
		super();
		this.id = id;
		this.status = status;
		this.grandTotal = grandTotal;
		this.orders = (List<Order>) orders;
	}
	
public OrderMain() {
	// TODO Auto-generated constructor stub
}
	
}
