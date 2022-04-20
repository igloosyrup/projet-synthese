package com.igloosryup.syrupsecurity.model;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Data
@Entity
public final class Admin extends User{

    private String username;
    @Getter
    @Setter(AccessLevel.NONE)
    private final boolean HAS_ACCESS = true;


}
