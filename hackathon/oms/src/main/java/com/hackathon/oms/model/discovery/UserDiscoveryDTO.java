package com.hackathon.oms.model.discovery;

import lombok.Data;
@Data
public class UserDiscoveryDTO {
	private Long id;
	private String username;
	
	private String password;

	private String firstName;

	private String lastName;
}
