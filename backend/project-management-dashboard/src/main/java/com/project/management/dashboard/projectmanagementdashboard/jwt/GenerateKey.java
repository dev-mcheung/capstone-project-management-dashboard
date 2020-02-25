package com.project.management.dashboard.projectmanagementdashboard.jwt;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;

public class GenerateKey {

    // algo - Takes 'HS256', 'HS384', 'HS512'
    public static void generateKey() {
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        System.out.println(key);
    }
}
