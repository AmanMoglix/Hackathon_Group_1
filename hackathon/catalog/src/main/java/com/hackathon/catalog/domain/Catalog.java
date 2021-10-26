package com.hackathon.catalog.domain;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "hackathon_catalog")
public class Catalog {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "category_id")
	private Long categoryId;
	@Column(name = "product_name")
	private String productName;
	@Column(name = "product_description")
	private String productDescription;
	@Column(name = "product_image")
	private String productImage;
	
	@AttributeOverrides({
		@AttributeOverride(name = "filename", column= @Column(name = "image_file_name")),
		@AttributeOverride(name = "contentType", column= @Column(name = "image_file_content_type")),
		@AttributeOverride(name = "filesize", column= @Column(name = "image_file_size")),
	})
	private UploadedFileResource imagedoc;
}
