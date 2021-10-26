package com.hackathon.catalog.service.impl;
import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.hackathon.catalog.domain.Catalog;
import com.hackathon.catalog.domain.UploadedFileResource;
import com.hackathon.catalog.model.CurrentUser;
import com.hackathon.catalog.repository.CatalogRepositroy;
import com.hackathon.catalog.service.CatalogService;
import com.hackathon.catalog.service.FileStorageService;
@Service
@Transactional
public class CatalogServiceImpl implements CatalogService {
    private static Logger logger = LoggerFactory.getLogger(CatalogServiceImpl.class);
@Autowired
private CatalogRepositroy catalogRepositroy;
@Autowired
private FileStorageService fileStorage;
	@Override
	public Catalog saveOrUpdate(Catalog catalog, CurrentUser currentUser)  {
//		if(this.getById(catalog.getId())!=null) {
//			logger.info("Entity is Going to update user by '{}'", new Gson().toJson(currentUser));
//		return 	this.catalogRepositroy.save(catalog);
//		}else
//		if (imageDoc != null && imageDoc.length > 0) {
//			MultipartFile resumeFile = imageDoc[0];
//			final String filename =  catalog.getProductName() + resumeFile.getOriginalFilename();
//
//			// get content type and other information
//			UploadedFileResource imagedoc = new UploadedFileResource();
//			imagedoc.setFilename(filename);
//			imagedoc.setContentType(resumeFile.getContentType());
//			imagedoc.setFilesize(resumeFile.getSize());
//			catalog.setImagedoc(imagedoc);
//			this.fileStorage.save(resumeFile);
////			String uploadPath = this.fileStorage.getFileStorageLocation("/resumes");
////			File file = this.fileStorage.getFileStorageLocation("/resumes", filename);
//			// save file on file system
////			final String path = this.servletContext.getRealPath(uploadPath);
////			resumeFile.transferTo(file);
//		}
			logger.info(" Entity Going to persist user by '{}'", new Gson().toJson(currentUser));
		return this.catalogRepositroy.save(catalog);
	}

	@Override
	public Catalog getById(Long catalogId) {
		logger.info("Getting product by catalogIs" + catalogId);

		Catalog catalog=this.catalogRepositroy.getById(catalogId);
		logger.info("Getting product by catalogIs" + catalog);
		if(catalog!=null) {
			return catalog;
		}
		return null;
	}

	@Override
	public List<Catalog> list() {
		return this.catalogRepositroy.findAll();
	}

	@Override
	public void delete(Long catalogId) {
		// TODO Auto-generated method stub

	}

}
