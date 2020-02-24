package com.project.management.dashboard.projectmanagementdashboard.models.data;

import com.project.management.dashboard.projectmanagementdashboard.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
}
