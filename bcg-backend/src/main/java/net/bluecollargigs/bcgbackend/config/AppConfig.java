// package net.bluecollargigs.bcgbackend.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

// @Configuration
// @EnableWebSecurity
// public class AppConfig {

//     @Bean
//     SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//                 // http.authorizeHttpRequests(Authorize -> Authorize
//                 // // whitlisting all request the not start with /api
//                 // .requestMatchers("/api/**").authenticated()
//                 // .anyRequest().permitAll())
//                 // .httpBasic().and()
//                 // .csrf(csrf -> csrf.disable());

//         return http.build();
//     }


// }
