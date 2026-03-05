package api.dto;

import java.time.LocalDateTime;

public class UserResponse{

    private Long id;
    private String username;
    private String name;
    private String document;
    private String email;
    private String role;
    private String image;
    private Boolean state;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public UserResponse(Long id, String username, String name, String document,
                   String email, String role, String image,
                   Boolean state, LocalDateTime createdAt,
                   LocalDateTime updatedAt) {

        this.id = id;
        this.username = username;
        this.name = name;
        this.document = document;
        this.email = email;
        this.role = role;
        this.image = image;
        this.state = state;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

  
}