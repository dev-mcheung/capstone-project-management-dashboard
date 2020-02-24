package com.project.management.dashboard.projectmanagementdashboard.models;

import javax.persistence.*;

@Entity
@Table(name = "backend_devs")
public class BackEnd {
    @Id
    private long dev_id;

    @ManyToOne
    @JoinColumn(name = "fk_project")
    private Project project;

    public BackEnd(long dev_id, Project project) {
        this.dev_id = dev_id;
        this.project = project;
    }

    public BackEnd() {}

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
