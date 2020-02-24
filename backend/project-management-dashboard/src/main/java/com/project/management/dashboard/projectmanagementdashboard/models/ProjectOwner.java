package com.project.management.dashboard.projectmanagementdashboard.models;

import javax.persistence.*;

@Entity
@Table(name = "project_owners")
public class ProjectOwner {
    @Id
    @GeneratedValue
    private long dev_id;

    @ManyToOne
    @JoinColumn(name = "fk_project")
    private Project project;

    public ProjectOwner(long dev_id, Project project) {
        this.dev_id = dev_id;
        this.project = project;
    }

    public ProjectOwner() {}

    public long getDev_id() {
        return dev_id;
    }

    public void setDev_id(long dev_id) {
        this.dev_id = dev_id;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
