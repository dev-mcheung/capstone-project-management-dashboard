package com.project.management.dashboard.projectmanagementdashboard.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table (name = "users")
public class User {
    @Id
    private Long id;

    @OneToOne
    @JoinColumn(name = "id")
    @MapsId
    private Account account;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name ="role", nullable = false)
    private String role;

    @Column(name="email_address", nullable = false)
    private String emailAddress;

    @Column(name = "created_by", nullable = false)
    private String createdBy;

    @Column(name = "created_on", nullable = false)
    private Date createdOn;

    @Column(name = "location", nullable = false)
    private String location;

    public User() {

    }

    public User(Long id, String firstName, String lastName, String role, String emailAddress, String createdBy, Date createdOn, String location) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.emailAddress = emailAddress;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    @Override
    public String toString() {
        return "User{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", role='" + role + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", createdBy='" + createdBy + '\'' +
                ", createdOn=" + createdOn +
                ", location='" + location + '\'' +
                '}';
    }
}


