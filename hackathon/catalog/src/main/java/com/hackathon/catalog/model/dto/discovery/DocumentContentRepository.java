package com.hackathon.catalog.model.dto.discovery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.catalog.domain.DocumentContent;
@Repository
public interface DocumentContentRepository extends JpaRepository<DocumentContent, Long> {
	DocumentContent findByDocumentVersionId(long documentVersionId);
}
