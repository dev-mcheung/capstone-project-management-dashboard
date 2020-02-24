package com.project.management.dashboard.projectmanagementdashboard.models.data;

import com.project.management.dashboard.projectmanagementdashboard.models.TechLead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechLeadRepository extends JpaRepository<TechLead, Long> {
}
