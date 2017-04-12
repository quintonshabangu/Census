package com.quintonshabangu.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by quinton.shabangu on 2017/04/05.
 */
@MappedSuperclass
public class IdentifiableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_SEQ")
    @SequenceGenerator(
            name="USER_SEQ",
            sequenceName="USER_SEQUENCE",
            allocationSize=1
    )

    @Column(name="ID", nullable = true)
    private Long id;

    @Version
    @Column(name="VERSION", nullable = true)
    private Long version;


    @Column(name="DATEPOSTED", nullable = true)
    private Date datePosted;

    public Long getId() {
        return this.id;
    }

    public Long getVersion() {
        return this.version;
    }

    public Date getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(Date datePosted) {
        this.datePosted = datePosted;
    }
}
