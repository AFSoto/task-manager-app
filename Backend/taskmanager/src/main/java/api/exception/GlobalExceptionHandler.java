package api.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import org.springframework.web.bind.MethodArgumentNotValidException;

import api.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

        @ExceptionHandler(InvalidCredentialsException.class)
        public ResponseEntity<ApiResponse> handleInvalidCredentials(InvalidCredentialsException e) {

                return ResponseEntity
                                .status(HttpStatus.UNAUTHORIZED)
                                .body(new ApiResponse(
                                                "Error",
                                                HttpStatus.UNAUTHORIZED.value(),
                                                "Credenciales inválidas",
                                                null));
        }

        @ExceptionHandler(UserNotFoundException.class)
        public ResponseEntity<ApiResponse> handleUserNotFound(UserNotFoundException e) {

                return ResponseEntity
                                .status(HttpStatus.UNAUTHORIZED)
                                .body(new ApiResponse(
                                                "Error",
                                                HttpStatus.UNAUTHORIZED.value(),
                                                "Credenciales inválidas",
                                                null));
        }


        @ExceptionHandler(Exception.class)
        public ResponseEntity<ApiResponse> handleGenericException(Exception e) {

                return ResponseEntity
                                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body(new ApiResponse(
                                                "Error",
                                                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                                                "Error interno del servidor",
                                                null));
        }

        // Maneja los errores de validación de campos enviados en el request.
// Se activa cuando las anotaciones como @Email, @NotBlank, @Size, etc. fallan.
// Recorre cada campo con error y devuelve un mapa con: campo -> mensaje de error.
        @ExceptionHandler(MethodArgumentNotValidException.class)
        public ResponseEntity<ApiResponse> handleValidation(MethodArgumentNotValidException e) {

                Map<String, String> errors = new HashMap<>();

                e.getBindingResult().getFieldErrors().forEach(error -> {
                        errors.put(error.getField(), error.getDefaultMessage());
                });

                return ResponseEntity
                                .status(HttpStatus.BAD_REQUEST)
                                .body(new ApiResponse(
                                                "Error",
                                                HttpStatus.BAD_REQUEST.value(),
                                                "Errores de validación",
                                                errors));
        }

        // Maneja errores de integridad de la base de datos.
// Se lanza cuando se viola una restricción como UNIQUE o NOT NULL.
// Ejemplo: intentar registrar un usuario con un email que ya existe.
        @ExceptionHandler(DataIntegrityViolationException.class)
        public ResponseEntity<ApiResponse> handleDuplicateKey(DataIntegrityViolationException e) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                                .body(new ApiResponse("error", HttpStatus.CONFLICT.value(),
                                                "Ya existe un usuario con ese email, documento o username", null));
        }

}