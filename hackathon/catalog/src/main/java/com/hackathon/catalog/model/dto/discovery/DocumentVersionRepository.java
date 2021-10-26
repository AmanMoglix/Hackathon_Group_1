package com.hackathon.catalog.model.dto.discovery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hackathon.catalog.domain.DocumentVersion;
@Repository
public interface DocumentVersionRepository extends JpaRepository<DocumentVersion, Long> {

}
