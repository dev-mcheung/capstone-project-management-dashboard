package com.project.management.dashboard.projectmanagementdashboard.models.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectManager extends JpaRepository<ProjectManager, Long> {
}
