package com.project.management.dashboard.projectmanagementdashboard.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    private long project_id;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="description", nullable = false)
    private String description;

    @OneToMany(mappedBy = "project")
    @Column(name="project_manager",  nullable = false)
    private List<ProjectManager> projectManagers = new ArrayList<ProjectManager>();

    @OneToMany(mappedBy = "project")
    @Column(name="project_owner", nullable = false)
    private List<ProjectOwner> projectOwners = new ArrayList<ProjectOwner>();

    @OneToMany(mappedBy = "project")
    @Column(name="tech_lead", nullable = false)
    private List<TechLead> techLeads = new ArrayList<TechLead>();

    @OneToMany(mappedBy = "project")
    @Column(name="frontend_dev", nullable = false)
    private List<FrontEnd> frontEnds = new ArrayList<FrontEnd>();

    @OneToMany(mappedBy = "project")
    @Column(name="backend_dev", nullable = false)
    private List<BackEnd> backEnds = new ArrayList<BackEnd>();

    @OneToMany(mappedBy = "project")
    @Column(name="tester", nullable = false)
    private List<Tester> testers = new ArrayList<Tester>();

    @Column(name="deadline", nullable = false)
    private Date deadline;

    @Column(name="current_status", nullable = false)
    private String currentStatus;

    @Column(name="created_by", nullable = false)
    private String created_by;

    @Column(name="priority", nullable = false)
    private String priority;

    public Project(){

    }

    public Project(long project_id, String title, String description, List<ProjectManager> projectManagers,
                   List<ProjectOwner> projectOwners, List<TechLead> techLeads,
                   List<FrontEnd> frontEnds, List<BackEnd> backEnds, List<Tester> testers,
                   Date deadline, String currentStatus, String created_by, String priority) {
        this.project_id = project_id;
        this.title = title;
        this.description = description;
        this.projectManagers = projectManagers;
        this.projectOwners = projectOwners;
        this.techLeads = techLeads;
        this.frontEnds = frontEnds;
        this.backEnds = backEnds;
        this.testers = testers;
        this.deadline = deadline;
        this.currentStatus = currentStatus;
        this.created_by = created_by;
        this.priority = priority;
    }

    public long getProject_id() {
        return project_id;
    }

    public void setProject_id(long project_id) {
        this.project_id = project_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ProjectManager> getProjectManagers() {
        return projectManagers;
    }

    public void setProjectManagers(List<ProjectManager> projectManagers) {
        this.projectManagers = projectManagers;
    }

    public List<ProjectOwner> getProjectOwners() {
        return projectOwners;
    }

    public void setProjectOwners(List<ProjectOwner> projectOwners) {
        this.projectOwners = projectOwners;
    }

    public List<TechLead> getTechLeads() {
        return techLeads;
    }

    public void setTechLeads(List<TechLead> techLeads) {
        this.techLeads = techLeads;
    }

    public List<FrontEnd> getFrontEnds() {
        return frontEnds;
    }

    public void setFrontEnds(List<FrontEnd> frontEnds) {
        this.frontEnds = frontEnds;
    }

    public List<BackEnd> getBackEnds() {
        return backEnds;
    }

    public void setBackEnds(List<BackEnd> backEnds) {
        this.backEnds = backEnds;
    }

    public List<Tester> getTesters() {
        return testers;
    }

    public void setTesters(List<Tester> testers) {
        this.testers = testers;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getCurrentStatus() {
        return currentStatus;
    }

    public void setCurrentStatus(String currentStatus) {
        this.currentStatus = currentStatus;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return project_id == project.project_id &&
                Objects.equals(title, project.title) &&
                Objects.equals(description, project.description) &&
                Objects.equals(projectManagers, project.projectManagers) &&
                Objects.equals(projectOwners, project.projectOwners) &&
                Objects.equals(techLeads, project.techLeads) &&
                Objects.equals(frontEnds, project.frontEnds) &&
                Objects.equals(backEnds, project.backEnds) &&
                Objects.equals(testers, project.testers) &&
                Objects.equals(deadline, project.deadline) &&
                Objects.equals(currentStatus, project.currentStatus) &&
                Objects.equals(created_by, project.created_by) &&
                Objects.equals(priority, project.priority);
    }

    @Override
    public int hashCode() {
        return Objects.hash(project_id, title, description, projectManagers, projectOwners, techLeads, frontEnds, backEnds, testers, deadline, currentStatus, created_by, priority);
    }
}
