package com.project.management.dashboard.projectmanagementdashboard.jwt;

import com.project.management.dashboard.projectmanagementdashboard.models.Account;
import com.project.management.dashboard.projectmanagementdashboard.models.data.AccountRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

@Service
public class UserDetailsDatabaseManager implements UserDetailsService {
    private AccountRepository accountRepository;

    public UserDetailsDatabaseManager(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.findByUsername(username);
        if (account == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(account.getUsername(), account.getPassword(), emptyList());
    }
}
