package com.example.loginauthapi.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "api-security")
public class Config {
	
	private String tokenSecrety;

	public String getTokenSecrety() {
		return tokenSecrety;
	}
	
	public void setTokenSecrety(String tokenSecrety) {
		this.tokenSecrety = tokenSecrety;
	}
}
