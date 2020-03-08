package com.project.management.dashboard.projectmanagementdashboard.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long project_id;

    @Column(name="title", nullable = false)
    private String title;

    @Column(name="description", nullable = false)
    private String description;

//    @OneToMany(mappedBy = "project")
//    private List<ProjectManager> projectManagers = new ArrayList<>();

//    @Column(name="project_owner", nullable = false)
//    private List projectOwners;
//
//    @Column(name="tech_lead", nullable = false)
//    private List techLeads;
//
//    @Column(name="frontend_dev", nullable = false)
//    private List frontEnds;
//
//    @Column(name="backend_dev", nullable = false)
//    private List backEnds;
//
//    @Column(name="tester", nullable = false)
//    private List testers;

    @Column(name="creation_date", nullable = false)
    private Date creationDate;

    @Column(name="deadline", nullable = false)
    private Date deadline;

    @Column(name="current_status", nullable = false)
    private String currentStatus;

//    @Column(name="created_by", nullable = false)
//    private String createdBy;

    @Column(name="priority", nullable = false)
    private String priority;

    @ManyToOne
    @JoinColumn(name = "account")
    private Account createdBy;

    public Project(long project_id, String title, String description, Date creationDate, Date deadline, String currentStatus, String priority, Account createdBy) {
        this.project_id = project_id;
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.deadline = deadline;
        this.currentStatus = currentStatus;
//        this.createdBy = createdBy;
        this.priority = priority;
        this.createdBy = createdBy;
    }

    public Project () {}

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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
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

//    public String getCreatedBy() {
//        return createdBy;
//    }
//
//    public void setCreatedBy(String createdBy) {
//        this.createdBy = createdBy;
//    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public Account getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(Account createdBy) {
        this.createdBy = createdBy;
    }
}
