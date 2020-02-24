package com.project.management.dashboard.projectmanagementdashboard.models.data;

import com.project.management.dashboard.projectmanagementdashboard.models.FrontEnd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FrontEndRepository extends JpaRepository<FrontEnd, Long> {
}
