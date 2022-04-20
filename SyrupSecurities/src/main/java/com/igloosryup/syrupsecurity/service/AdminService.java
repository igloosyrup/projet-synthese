package com.igloosryup.syrupsecurity.service;

import com.igloosryup.syrupsecurity.model.Admin;
import com.igloosryup.syrupsecurity.repository.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    public AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Optional<Admin> loginAdmin(String username, String pwd){
        try{
            return Optional.of(adminRepository.findAdminByUsernameAndPwd(username, pwd));
        }catch(Exception exception){
            return Optional.empty();
        }
    }

    public Optional<Boolean> verifyPwd(String username, String pwd) {
        try{
            Admin admin = adminRepository.findAdminByUsernameAndPwd(username, pwd);
            return Optional.of(admin.getPwd().equals(pwd));
        } catch(Exception exception){
            return Optional.empty();
        }
    }
}
