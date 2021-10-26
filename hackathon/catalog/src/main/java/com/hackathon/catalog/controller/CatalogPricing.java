package com.hackathon.catalog.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hackathon.catalog.domain.Catalog;
import com.hackathon.catalog.model.CurrentUser;
import com.hackathon.catalog.service.CatalogService;

@RestController
@RequestMapping(value="/catalog/addPricing")
public class CatalogPricing {
	@Autowired
	private CatalogService catalogService;
	@RequestMapping(value = "", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE,
			 }, produces = "application/json")
	public Catalog addPricing(@RequestBody Catalog catalog,
			/* @RequestPart(required = false) MultipartFile files[], */ @RequestHeader("X_AUTHORITY") String authority,
			@RequestHeader("X_USER_ID") String userId, @RequestHeader("X_USERNAME") String username,
			@RequestHeader("X_LOCATION") String location)  {
        CurrentUser currentUser = CurrentUser.getInstance(userId, username, authority, location);
		return catalogService.saveOrUpdate(catalog, currentUser);
	}
}
