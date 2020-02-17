package com.project.management.dashboard.projectmanagementdashboard.controllers;

import com.project.management.dashboard.projectmanagementdashboard.models.User;
import com.project.management.dashboard.projectmanagementdashboard.models.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials= "true", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users/{username}/dashboard")
    public User getUsername(@PathVariable String username) {
        return null;
    }
}
