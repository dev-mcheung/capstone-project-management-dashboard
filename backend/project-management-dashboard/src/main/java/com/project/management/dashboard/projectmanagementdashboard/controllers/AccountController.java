package com.project.management.dashboard.projectmanagementdashboard.controllers;

import com.project.management.dashboard.projectmanagementdashboard.models.Account;
import com.project.management.dashboard.projectmanagementdashboard.models.data.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials= "true", allowedHeaders = "*")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/users")
    public List<Account> getAllUsers() {
        return accountRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public Optional<Account> getUsers(@PathVariable long id) {
        return accountRepository.findById(id);
    }

    @PostMapping("/users")
    public ResponseEntity<Void> proccessAddUser(@RequestBody Account account){
        account.setPassword(BCrypt.hashpw(
                account.getPassword(), BCrypt.gensalt(12)
        ));

        Account userAdded = accountRepository.save(account);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}/{username}").buildAndExpand(userAdded.getId(), userAdded.getUsername()).toUri();

        return ResponseEntity.created(uri).build();
    }
}