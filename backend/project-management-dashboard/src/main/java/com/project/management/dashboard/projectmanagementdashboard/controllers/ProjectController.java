package com.project.management.dashboard.projectmanagementdashboard.controllers;

import com.project.management.dashboard.projectmanagementdashboard.models.Account;
import com.project.management.dashboard.projectmanagementdashboard.models.Project;
import com.project.management.dashboard.projectmanagementdashboard.models.data.AccountRepository;
import com.project.management.dashboard.projectmanagementdashboard.models.data.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials= "true", allowedHeaders = "*")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping(path="/api/projects")
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @GetMapping(path="/users/{username}/dashboard/projects/{id}")
    public Project getUserProject(@PathVariable String username,
                                        @PathVariable long id) {
        return projectRepository.findById(id).get();
    }

    @DeleteMapping(path="/users/{username}/dashboard/projects/{id}")
    public ResponseEntity<Void> processDeleteProject(@PathVariable String username,
                                                     @PathVariable long id) {
        projectRepository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping(path="/users/{username}/dashboard/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable String username,
                                                 @PathVariable long id,
                                                 @RequestBody Project project) {

        Project projectUpdated = projectRepository.getOne(id);

        projectUpdated.setTitle(project.getTitle());
        projectUpdated.setDescription(project.getDescription());
        projectUpdated.setDeadline(project.getDeadline());
        projectUpdated.setCurrentStatus(project.getCurrentStatus());
        projectUpdated.setPriority(project.getPriority());

        projectRepository.save(projectUpdated);

        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @PostMapping(path="/users/{username}/dashboard/projects")
    public ResponseEntity<Void> proccessAddProject(@RequestBody Project project,
                                                   @PathVariable String username) {

        Account accountInfo = accountRepository.findByUsername(username);
        project.setCreatedBy(accountRepository.getOne(accountInfo.getId()));

        Project addProject = projectRepository.save(project);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(addProject.getProject_id()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
