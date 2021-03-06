package com.hackathon.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class Swagger {

    @Autowired
    private ApplicationConfig config;


    @Bean
    public Docket docket() {
    	System.out.println("*****"+config.getServerIp() + ":" + config.getServerPort() + "/api/v1/sso");
        return new Docket(DocumentationType.SWAGGER_2).useDefaultResponseMessages(false).apiInfo(apiInfo())
                .host(config.getServerIp() + ":" + config.getServerPort() + "/api/v1/sso").select()
                .apis(RequestHandlerSelectors.basePackage("com.hackathon.auth.controller.*")).paths(PathSelectors.any()).build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("User Service REST API").build();
         /* Useless statements
                      .description("Here we can place new order")
                .termsOfServiceUrl("http://javainuse.com")
                .contact("javainuse@gmail.com").license("JavaInUse License")
                .licenseUrl("javainuse@gmail.com").version("1.0")
        */
    }
}
