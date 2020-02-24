package com.project.management.dashboard.projectmanagementdashboard.models.data;

import com.project.management.dashboard.projectmanagementdashboard.models.ProjectOwner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectOwnerRepository extends JpaRepository<ProjectOwner, Long> {
}
