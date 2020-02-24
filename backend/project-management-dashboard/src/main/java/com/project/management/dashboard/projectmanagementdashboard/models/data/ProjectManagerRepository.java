package com.project.management.dashboard.projectmanagementdashboard.models.data;

import com.project.management.dashboard.projectmanagementdashboard.models.ProjectManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectManagerRepository extends JpaRepository<ProjectManager, Long> {
}
