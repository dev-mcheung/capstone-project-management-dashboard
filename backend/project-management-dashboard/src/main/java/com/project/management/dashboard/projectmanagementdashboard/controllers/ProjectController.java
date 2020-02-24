package com.project.management.dashboard.projectmanagementdashboard.controllers;

import com.project.management.dashboard.projectmanagementdashboard.models.Project;
import com.project.management.dashboard.projectmanagementdashboard.models.data.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials= "true", allowedHeaders = "*")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping(path="/users/{username}/dashboard/projects")
    public ResponseEntity<Void> proccessAddProject(@RequestBody Project project,
                                                   @PathVariable String username) {
        Project addProject = projectRepository.save(project);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(addProject.getProject_id()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
