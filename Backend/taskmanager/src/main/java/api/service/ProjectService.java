package api.service;

import api.dto.*;
import api.exception.ResourceNotFoundException;
import api.model.Project;
import api.model.StateProjectTask;
import api.repository.ProjectRepository;
import api.repository.StateProjectTaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private StateProjectTaskRepository stateProjectTaskRepository;

    public Project createProject(CreateProjectRequest request) {

        StateProjectTask state = stateProjectTaskRepository
                .findById(request.getStateProjectTaskId())
                .orElseThrow(() -> new ResourceNotFoundException("Estado de proyecto no encontrado"));

        Project project = new Project();

        project.setName(request.getName());
        project.setDescription(request.getDescription());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setDeadline(request.getDeadline());
        project.setStateProjectTask(state);

        return projectRepository.save(project);
    }

    public List<ProjectResponse> getAllProjects() {
        return projectRepository.findAll()
                .stream()
                .map(this::mapToProjectResponse)
                .collect(Collectors.toList());
    }

    public ProjectResponse getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));
        return mapToProjectResponse(project);
    }

    public Project updateProject(Long id, UpdateProjectRequest request) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));

        StateProjectTask state = stateProjectTaskRepository
                .findById(request.getStateProjectTaskId())
                .orElseThrow(() -> new RuntimeException("Estado no encontrado"));

        project.setName(request.getName());
        project.setDescription(request.getDescription());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setDeadline(request.getDeadline());
        project.setStateProjectTask(state);

        return projectRepository.save(project);
    }

    private ProjectResponse mapToProjectResponse(Project project) {
        ProjectResponse response = new ProjectResponse();
        response.setId(project.getId());
        response.setName(project.getName());
        response.setDescription(project.getDescription());
        response.setState(project.getState());
        response.setStartDate(project.getStartDate());
        response.setEndDate(project.getEndDate());
        response.setDeadline(project.getDeadline());
        response.setCreatedAt(project.getCreatedAt());
        response.setUpdatedAt(project.getUpdatedAt());
        response.setStateProjectTask(project.getstateProjectTask());
        response.setTasks(project.getTasks());

        if (project.getUserProjects() != null) {
            List<UserSummary> users = project.getUserProjects()
                    .stream()
                    .map(up -> up.getUser())
                    .map(u -> new UserSummary(u.getId(), u.getName(), u.getImage()))
                    .collect(Collectors.toList());
            response.setUsers(users);
        }

        return response;
    }
}

