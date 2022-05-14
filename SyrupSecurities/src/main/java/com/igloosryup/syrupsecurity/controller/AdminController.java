package com.igloosryup.syrupsecurity.controller;

import com.igloosryup.syrupsecurity.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5520")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/{username}/{pwd}")
    public ResponseEntity<Boolean> loginAdmin(@PathVariable String username, @PathVariable String pwd){
        return adminService.loginAdmin(username, pwd)
                .map(admin1 -> ResponseEntity.status(HttpStatus.OK).body(true))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).body(false));
    }

    @GetMapping("/verify-password/{username}/{pwd}")
    public ResponseEntity<Boolean> verifyAdminPwd(@PathVariable String username, @PathVariable String pwd){
        return adminService.verifyPwd(username, pwd)
                .map(admin1 -> ResponseEntity.status(HttpStatus.OK).body(admin1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
}
