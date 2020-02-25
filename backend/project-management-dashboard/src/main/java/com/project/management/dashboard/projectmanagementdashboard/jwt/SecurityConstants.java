package com.project.management.dashboard.projectmanagementdashboard.jwt;

public class SecurityConstants {
    public static final String SECRET = System.getenv("JWT_SECRET");
    public static final long EXPIRATION_TIME = 604_800_000; // 7 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
}
