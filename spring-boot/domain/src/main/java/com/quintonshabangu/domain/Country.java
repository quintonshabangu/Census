package com.quintonshabangu.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import java.io.Serializable;

/**
 * Created by quinton.shabangu on 2017/04/05.
 */
@Entity
public class Country extends IdentifiableEntity implements Serializable {

    @Column(name="NAME", nullable = false)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
